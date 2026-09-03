// Serverless function da Vercel
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res
      .status(422)
      .json({ error: "Preencha nome, e-mail e mensagem." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.status(422).json({ error: "E-mail inválido." });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  const FROM_EMAIL =
    process.env.CONTACT_FROM_EMAIL ||
    "Integra Site <contato@integraveiculos.com>";

  const TO_EMAIL =
    process.env.CONTACT_TO_EMAIL ||
    "contato@integraveiculos.com";

  if (!RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY não configurada nas variáveis de ambiente da Vercel."
    );

    return res.status(500).json({
      error: "Configuração de e-mail ausente no servidor.",
    });
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

        // Ao clicar em "Responder", o e-mail vai diretamente para o cliente
        reply_to: email,

        subject: `Novo contato pelo site — ${name}`,

        html: buildEmailHtml({
          name,
          email,
          phone,
          message,
        }),
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();

      console.error("Erro retornado pelo Resend:", errText);

      return res.status(502).json({
        error: "Falha ao enviar o e-mail.",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro inesperado ao enviar e-mail:", err);

    return res.status(500).json({
      error: "Erro inesperado ao enviar o e-mail.",
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml({ name, email, phone, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novo contato - Integra</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #f3f4f6;
  font-family: Arial, Helvetica, sans-serif;
  color: #171717;
">

  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background-color:#f3f4f6; padding:40px 16px;"
  >
    <tr>
      <td align="center">

        <!-- CONTAINER -->
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            max-width:620px;
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
            box-shadow:0 4px 20px rgba(0,0,0,0.06);
          "
        >

          <!-- HEADER -->
          <tr>
            <td style="
              background:#171717;
              padding:28px 32px;
            ">

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td>
                     <img src="https://integraveiculos.com/integra.png" alt="Integra Veículos"  style="display:block;height:40px;width:auto;border:0;"/>
                  </td>
                  <td align="right">
                    <div style="
                      display:inline-block;
                      background:#c8102e;
                      color:#ffffff;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:1px;
                      text-transform:uppercase;
                      padding:8px 12px;
                      border-radius:20px;
                    ">
                      Novo contato
                    </div>
                  </td>

                </tr>
              </table>

            </td>
          </tr>


          <!-- TITLE -->
          <tr>
            <td style="padding:34px 32px 20px;">

              <div style="
                font-size:24px;
                line-height:1.25;
                font-weight:700;
                color:#171717;
              ">
                Você recebeu uma nova mensagem
              </div>

              <div style="
                margin-top:8px;
                font-size:14px;
                line-height:1.6;
                color:#737373;
              ">
                Um visitante entrou em contato através do
                formulário do site da Integra.
              </div>

            </td>
          </tr>


          <!-- CLIENT -->
          <tr>
            <td style="padding:0 32px 8px;">

              <div style="
                background:#f8f8f8;
                border:1px solid #eeeeee;
                border-radius:10px;
                padding:20px;
              ">

                <div style="
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:1.2px;
                  text-transform:uppercase;
                  color:#8a8a8a;
                  margin-bottom:8px;
                ">
                  Cliente
                </div>

                <div style="
                  font-size:18px;
                  font-weight:700;
                  color:#171717;
                ">
                  ${safeName}
                </div>

              </div>

            </td>
          </tr>


          <!-- CONTACT INFORMATION -->
          <tr>
            <td style="padding:16px 32px 8px;">

              <div style="
                font-size:11px;
                font-weight:700;
                letter-spacing:1.2px;
                text-transform:uppercase;
                color:#8a8a8a;
                margin-bottom:12px;
              ">
                Informações de contato
              </div>


              <!-- EMAIL -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="margin-bottom:8px;"
              >
                <tr>

                  <td width="42" valign="middle">
                    <div style="
                      width:34px;
                      height:34px;
                      line-height:34px;
                      text-align:center;
                      background:#f1f1f1;
                      border-radius:8px;
                      font-size:15px;
                    ">
                      ✉
                    </div>
                  </td>

                  <td valign="middle">

                    <div style="
                      font-size:10px;
                      color:#999999;
                      text-transform:uppercase;
                      letter-spacing:.8px;
                      margin-bottom:3px;
                    ">
                      E-mail
                    </div>

                    <a
                      href="mailto:${safeEmail}"
                      style="
                        font-size:14px;
                        color:#171717;
                        text-decoration:none;
                        font-weight:600;
                      "
                    >
                      ${safeEmail}
                    </a>

                  </td>

                </tr>
              </table>


              ${safePhone
      ? `
              <!-- PHONE -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="margin-bottom:8px;"
              >
                <tr>

                  <td width="42" valign="middle">
                    <div style="
                      width:34px;
                      height:34px;
                      line-height:34px;
                      text-align:center;
                      background:#f1f1f1;
                      border-radius:8px;
                      font-size:15px;
                    ">
                      ☎
                    </div>
                  </td>

                  <td valign="middle">

                    <div style="
                      font-size:10px;
                      color:#999999;
                      text-transform:uppercase;
                      letter-spacing:.8px;
                      margin-bottom:3px;
                    ">
                      Telefone
                    </div>

                    <a
                      href="tel:${safePhone.replace(/\D/g, "")}"
                      style="
                        font-size:14px;
                        color:#171717;
                        text-decoration:none;
                        font-weight:600;
                      "
                    >
                      ${safePhone}
                    </a>

                  </td>

                </tr>
              </table>
              `
      : ""
    }

            </td>
          </tr>


          <!-- MESSAGE -->
          <tr>
            <td style="padding:24px 32px 8px;">

              <div style="
                font-size:11px;
                font-weight:700;
                letter-spacing:1.2px;
                text-transform:uppercase;
                color:#8a8a8a;
                margin-bottom:12px;
              ">
                Mensagem
              </div>

              <div style="
                background:#ffffff;
                border:1px solid #e5e5e5;
                border-left:4px solid #c8102e;
                border-radius:8px;
                padding:18px 20px;
                font-size:15px;
                line-height:1.7;
                color:#333333;
              ">
                ${safeMessage}
              </div>

            </td>
          </tr>


          <!-- CTA -->
          <tr>
            <td style="padding:28px 32px 34px;">

              <a
                href="mailto:${safeEmail}?subject=Re:%20Contato%20pelo%20site%20da%20Integra"
                style="
                  display:block;
                  background:#c8102e;
                  color:#ffffff;
                  text-align:center;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:700;
                  padding:15px 20px;
                  border-radius:8px;
                "
              >
                Responder ao cliente
              </a>

              <div style="
                margin-top:12px;
                text-align:center;
                font-size:11px;
                line-height:1.5;
                color:#999999;
              ">
                Ao clicar, seu aplicativo de e-mail será aberto
                com o endereço do cliente preenchido.
              </div>

            </td>
          </tr>


          <!-- FOOTER -->
          <tr>
            <td style="
              background:#fafafa;
              border-top:1px solid #eeeeee;
              padding:18px 32px;
              text-align:center;
            ">

              <div style="
                font-size:11px;
                line-height:1.5;
                color:#999999;
              ">
                Mensagem enviada automaticamente pelo site da
                <strong style="color:#777777;">Integra</strong>.
              </div>

            </td>
          </tr>

        </table>

        <!-- SMALL FOOTER -->
        <div style="
          max-width:620px;
          margin-top:16px;
          font-size:10px;
          color:#aaaaaa;
          text-align:center;
        ">
          Este é um e-mail automático. Não é necessário responder
          diretamente a esta mensagem.
        </div>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}