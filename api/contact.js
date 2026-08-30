// Serverless function da Vercel (roda no servidor, nunca no navegador).
// Recebe os dados do formulário de contato e envia um e-mail com o design
// da Integra via Resend, em vez de depender do template genérico do
// Formspree. A chave da API do Resend fica só aqui — nunca é exposta ao
// site publicado (diferente de variáveis com prefixo VITE_, que vão para
// o código do navegador).

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(422).json({ error: "Preencha nome, e-mail e mensagem." });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(422).json({ error: "E-mail inválido." });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  // Enquanto o domínio próprio não estiver verificado no Resend, o "from"
  // precisa ser o endereço de teste deles (onboarding@resend.dev) — troque
  // pelo seu domínio (ex: "Integra <contato@integraveiculos.com.br>")
  // assim que verificar o domínio no painel do Resend.
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Integra Site <onboarding@resend.dev>";
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "integra.servicos.ma@gmail.com";

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY não configurada nas variáveis de ambiente da Vercel.");
    return res.status(500).json({ error: "Configuração de e-mail ausente no servidor." });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Contato pelo site — ${name}`,
        html: buildEmailHtml({ name, email, phone, message }),
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Erro retornado pelo Resend:", errText);
      return res.status(502).json({ error: "Falha ao enviar o e-mail." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro inesperado ao enviar e-mail:", err);
    return res.status(500).json({ error: "Erro inesperado ao enviar o e-mail." });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml({ name, email, phone, message }) {
  const row = (label, value) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #888888; margin-bottom: 4px;">${escapeHtml(label)}</div>
        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #1a1a1a; white-space: pre-wrap;">${escapeHtml(value)}</div>
      </td>
    </tr>`;

  return `
  <div style="background:#f5f5f5; padding: 32px 16px; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" style="max-width: 560px; margin: 0 auto; background:#ffffff; border-collapse: collapse;">
      <tr>
        <td style="background:#1a1a1a; padding: 24px 32px;">
          <span style="color:#ffffff; font-size: 20px; font-weight:800; letter-spacing: 0.02em;">INTEGRA</span>
          <span style="display:inline-block; width:24px; height:2px; background:#C8102E; vertical-align:middle; margin: 0 10px;"></span>
          <span style="color:#C8102E; font-size: 11px; letter-spacing:0.1em; text-transform:uppercase;">Novo contato pelo site</span>
        </td>
      </tr>
      <tr>
        <td style="padding: 24px 32px;">
          <table role="presentation" width="100%" style="border-collapse: collapse;">
            ${row("Nome", name)}
            ${row("E-mail", email)}
            ${phone ? row("Telefone", phone) : ""}
            ${row("Mensagem", message)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding: 16px 32px; background:#fafafa; border-top:1px solid #eee;">
          <span style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; color:#999999;">
            Enviado pelo formulário de contato do site da Integra. Basta responder este e-mail para falar direto com ${escapeHtml(name)}.
          </span>
        </td>
      </tr>
    </table>
  </div>`;
}