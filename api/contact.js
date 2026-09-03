// Serverless Function da Vercel
// Exemplo: /api/contact.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      error: "Método não permitido.",
    });
  }

  const { name, email, phone, message } = req.body ?? {};

  // Validação dos campos obrigatórios
  if (!name || !email || !message) {
    return res.status(422).json({
      error: "Preencha nome, e-mail e mensagem.",
    });
  }

  // Validação do e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.status(422).json({
      error: "E-mail inválido.",
    });
  }

  // Variáveis de ambiente
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
    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],

          // Ao clicar em "Responder",
          // o e-mail vai diretamente para o cliente.
          reply_to: email,

          subject: `Novo contato pelo site — ${name}`,

          html: buildEmailHtml({
            name,
            email,
            phone,
            message,
          }),
        }),
      }
    );

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();

      console.error(
        "Erro retornado pelo Resend:",
        errText
      );

      return res.status(502).json({
        error: "Falha ao enviar o e-mail.",
      });
    }

    return res.status(200).json({
      ok: true,
    });
  } catch (err) {
    console.error(
      "Erro inesperado ao enviar e-mail:",
      err
    );

    return res.status(500).json({
      error: "Erro inesperado ao enviar o e-mail.",
    });
  }
}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// =====================================================
// TEMPLATE DO E-MAIL
// =====================================================

function buildEmailHtml({
  name,
  email,
  phone,
  message,
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  const safePhone = phone
    ? escapeHtml(phone)
    : "";

  const safeMessage = escapeHtml(message)
    .replace(/\r\n/g, "<br>")
    .replace(/\n/g, "<br>");

  const phoneNumber = phone
    ? String(phone).replace(/\D/g, "")
    : "";

  return `
<!DOCTYPE html>

<html
  lang="pt-BR"
>
<head>

  <meta
    charset="UTF-8"
  />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta
    name="x-apple-disable-message-reformatting"
  />

  <title>
    Novo contato - Integra
  </title>

</head>

<body
  style="
    margin:0;
    padding:0;
    background-color:#f3f4f6;
    font-family:Arial,Helvetica,sans-serif;
    color:#171717;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
  "
>

  <!-- ================================================= -->
  <!-- OUTER CONTAINER -->
  <!-- ================================================= -->

  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="
      width:100%;
      background-color:#f3f4f6;
    "
  >

    <tr>

      <td
        align="center"
        style="
          padding:24px 12px;
        "
      >

        <!-- ================================================= -->
        <!-- MAIN CONTAINER -->
        <!-- ================================================= -->

        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width:100%;
            max-width:620px;
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
          "
        >

          <!-- ================================================= -->
          <!-- HEADER -->
          <!-- ================================================= -->

          <tr>

            <td
              style="
                background:#171717;
                padding:24px 24px 22px;
              "
            >

              <!-- LOGO -->

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >

                <tr>

                  <td
                    align="left"
                  >

                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >

                      <tr>

                        <td
                          style="
                            background:#ffffff;
                            border-radius:6px;
                            padding:8px 14px;
                          "
                        >

                          <img
                            src="https://integraveiculos.com/integra-logo.png"
                            alt="Integra Veículos"
                            style="
                              display:block;
                              height:24px;
                              width:auto;
                              max-width:100%;
                              border:0;
                            "
                          />

                        </td>

                      </tr>

                    </table>

                  </td>

                </tr>

                <!-- ESPAÇO ENTRE LOGO E BADGE -->

                <tr>

                  <td
                    height="12"
                    style="
                      height:12px;
                      line-height:12px;
                      font-size:0;
                    "
                  >
                    &nbsp;
                  </td>

                </tr>

                <!-- BADGE -->

                <tr>

                  <td
                    align="left"
                  >

                    <span
                      style="
                        display:inline-block;
                        background:#c8102e;
                        color:#ffffff;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:10px;
                        line-height:12px;
                        font-weight:700;
                        letter-spacing:1px;
                        text-transform:uppercase;
                        padding:7px 11px;
                        border-radius:20px;
                      "
                    >
                      Novo contato
                    </span>

                  </td>

                </tr>

              </table>

            </td>

          </tr>


          <!-- ================================================= -->
          <!-- TITLE -->
          <!-- ================================================= -->

          <tr>

            <td
              style="
                padding:30px 24px 18px;
              "
            >

              <div
                style="
                  font-size:22px;
                  line-height:1.3;
                  font-weight:700;
                  color:#171717;
                "
              >
                Você recebeu uma nova mensagem
              </div>

              <div
                style="
                  margin-top:8px;
                  font-size:14px;
                  line-height:1.6;
                  color:#737373;
                "
              >
                Um visitante entrou em contato através do
                formulário do site da Integra.
              </div>

            </td>

          </tr>


          <!-- ================================================= -->
          <!-- CLIENT -->
          <!-- ================================================= -->

          <tr>

            <td
              style="
                padding:0 24px 8px;
              "
            >

              <div
                style="
                  background:#f8f8f8;
                  border:1px solid #eeeeee;
                  border-radius:10px;
                  padding:18px;
                "
              >

                <div
                  style="
                    font-size:10px;
                    line-height:1.4;
                    font-weight:700;
                    letter-spacing:1.2px;
                    text-transform:uppercase;
                    color:#8a8a8a;
                    margin-bottom:7px;
                  "
                >
                  Cliente
                </div>

                <div
                  style="
                    font-size:18px;
                    line-height:1.4;
                    font-weight:700;
                    color:#171717;
                    word-break:break-word;
                  "
                >
                  ${safeName}
                </div>

              </div>

            </td>

          </tr>


          <!-- ================================================= -->
          <!-- CONTACT INFORMATION -->
          <!-- ================================================= -->

          <tr>

            <td
              style="
                padding:18px 24px 8px;
              "
            >

              <div
                style="
                  font-size:11px;
                  line-height:1.4;
                  font-weight:700;
                  letter-spacing:1.2px;
                  text-transform:uppercase;
                  color:#8a8a8a;
                  margin-bottom:12px;
                "
              >
                Informações de contato
              </div>


              <!-- EMAIL -->

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width:100%;
                  margin-bottom:10px;
                "
              >

                <tr>

                  <td
                    width="42"
                    valign="middle"
                    style="
                      width:42px;
                    "
                  >

                    <div
                      style="
                        width:34px;
                        height:34px;
                        line-height:34px;
                        text-align:center;
                        background:#f1f1f1;
                        border-radius:8px;
                        font-size:15px;
                      "
                    >
                      ✉
                    </div>

                  </td>

                  <td
                    valign="middle"
                    style="
                      word-break:break-word;
                    "
                  >

                    <div
                      style="
                        font-size:10px;
                        line-height:1.3;
                        color:#999999;
                        text-transform:uppercase;
                        letter-spacing:.8px;
                        margin-bottom:3px;
                      "
                    >
                      E-mail
                    </div>

                    <a
                      href="mailto:${safeEmail}"
                      style="
                        font-size:14px;
                        line-height:1.4;
                        color:#171717;
                        text-decoration:none;
                        font-weight:600;
                        word-break:break-all;
                      "
                    >
                      ${safeEmail}
                    </a>

                  </td>

                </tr>

              </table>


              ${
                safePhone
                  ? `

              <!-- PHONE -->

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width:100%;
                  margin-bottom:8px;
                "
              >

                <tr>

                  <td
                    width="42"
                    valign="middle"
                    style="
                      width:42px;
                    "
                  >

                    <div
                      style="
                        width:34px;
                        height:34px;
                        line-height:34px;
                        text-align:center;
                        background:#f1f1f1;
                        border-radius:8px;
                        font-size:15px;
                      "
                    >
                      ☎
                    </div>

                  </td>

                  <td
                    valign="middle"
                    style="
                      word-break:break-word;
                    "
                  >

                    <div
                      style="
                        font-size:10px;
                        line-height:1.3;
                        color:#999999;
                        text-transform:uppercase;
                        letter-spacing:.8px;
                        margin-bottom:3px;
                      "
                    >
                      Telefone
                    </div>

                    <a
                      href="tel:${phoneNumber}"
                      style="
                        font-size:14px;
                        line-height:1.4;
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


          <!-- ================================================= -->
          <!-- MESSAGE -->
          <!-- ================================================= -->

          <tr>

            <td
              style="
                padding:22px 24px 8px;
              "
            >

              <div
                style="
                  font-size:11px;
                  line-height:1.4;
                  font-weight:700;
                  letter-spacing:1.2px;
                  text-transform:uppercase;
                  color:#8a8a8a;
                  margin-bottom:12px;
                "
              >
                Mensagem
              </div>


              <div
                style="
                  background:#ffffff;
                  border:1px solid #e5e5e5;
                  border-left:4px solid #c8102e;
                  border-radius:8px;
                  padding:16px 16px;
                  font-size:15px;
                  line-height:1.7;
                  color:#333333;
                  word-break:break-word;
                "
              >
                ${safeMessage}
              </div>

            </td>

          </tr>


          <!-- ================================================= -->
          <!-- CTA -->
          <!-- ================================================= -->

          <tr>

            <td
              style="
                padding:26px 24px 30px;
              "
            >

              <a
                href="mailto:${safeEmail}?subject=Re:%20Contato%20pelo%20site%20da%20Integra"
                style="
                  display:block;
                  width:auto;
                  background:#c8102e;
                  color:#ffffff;
                  text-align:center;
                  text-decoration:none;
                  font-family:Arial,Helvetica,sans-serif;
                  font-size:14px;
                  line-height:20px;
                  font-weight:700;
                  padding:14px 18px;
                  border-radius:8px;
                "
              >
                Responder ao cliente
              </a>

              <div
                style="
                  margin-top:10px;
                  text-align:center;
                  font-size:11px;
                  line-height:1.5;
                  color:#999999;
                "
              >
                Ao clicar, seu aplicativo de e-mail será aberto
                com o endereço do cliente preenchido.
              </div>

            </td>

          </tr>


          <!-- ================================================= -->
          <!-- FOOTER -->
          <!-- ================================================= -->

          <tr>

            <td
              style="
                background:#fafafa;
                border-top:1px solid #eeeeee;
                padding:18px 24px;
                text-align:center;
              "
            >

              <div
                style="
                  font-size:11px;
                  line-height:1.5;
                  color:#999999;
                "
              >
                Mensagem enviada automaticamente pelo site da
                <strong
                  style="
                    color:#777777;
                  "
                >
                  Integra
                </strong>.
              </div>

            </td>

          </tr>

        </table>


        <!-- ================================================= -->
        <!-- SMALL FOOTER -->
        <!-- ================================================= -->

        <div
          style="
            width:100%;
            max-width:620px;
            margin-top:14px;
            font-size:10px;
            line-height:1.5;
            color:#aaaaaa;
            text-align:center;
          "
        >
          Este é um e-mail automático.
          Não é necessário responder diretamente
          a esta mensagem.
        </div>

      </td>

    </tr>

  </table>

</body>

</html>
  `;
}