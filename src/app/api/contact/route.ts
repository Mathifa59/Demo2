import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATARIOS = ["tkuriyama@joisfood.com", "jdelgado@joisfood.com"];

export async function POST(req: NextRequest) {
  try {
    const { nombre, empresa, email, telefono, cultivo, mensaje } =
      await req.json();

    const { error } = await resend.emails.send({
      from: "Selekta Web <contacto@selektafood.com>",
      to: DESTINATARIOS,
      replyTo: email,
      subject: `Nuevo contacto desde la web — ${nombre} (${empresa})`,
      html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f0;padding:40px 16px">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e5c23 0%,#2d7a33 100%);border-radius:16px 16px 0 0;padding:32px 40px">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <img src="https://www.selektafood.com/assets/logoselekta.png" alt="Selekta" height="40" style="display:block;height:40px;width:auto">
                  </td>
                  <td align="right">
                    <span style="background:rgba(255,255,255,0.15);color:#fff;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;padding:5px 12px;border-radius:20px;border:1px solid rgba(255,255,255,0.25)">Formulario web</span>
                  </td>
                </tr>
              </table>
              <h1 style="color:#fff;margin:20px 0 4px;font-size:22px;font-weight:700;letter-spacing:-0.3px">Nuevo mensaje de contacto</h1>
              <p style="color:rgba(255,255,255,0.7);margin:0;font-size:13px">${nombre} quiere ponerse en contacto</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px">

              <!-- DATOS -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ebebeb;border-radius:12px;overflow:hidden">
                <tr style="background:#f9f9f7">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#999;width:130px">Nombre</td>
                  <td style="padding:12px 16px;font-size:14px;font-weight:600;color:#1a1a1a;border-left:1px solid #ebebeb">${nombre}</td>
                </tr>
                <tr style="border-top:1px solid #ebebeb">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#999">Empresa</td>
                  <td style="padding:12px 16px;font-size:14px;font-weight:600;color:#1a1a1a;border-left:1px solid #ebebeb">${empresa}</td>
                </tr>
                <tr style="background:#f9f9f7;border-top:1px solid #ebebeb">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#999">Correo</td>
                  <td style="padding:12px 16px;font-size:14px;border-left:1px solid #ebebeb"><a href="mailto:${email}" style="color:#2d7a33;font-weight:600;text-decoration:none">${email}</a></td>
                </tr>
                <tr style="border-top:1px solid #ebebeb">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#999">Teléfono</td>
                  <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;border-left:1px solid #ebebeb">${telefono || "—"}</td>
                </tr>
                <tr style="background:#f9f9f7;border-top:1px solid #ebebeb">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#999">Cultivo</td>
                  <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;border-left:1px solid #ebebeb">${cultivo || "—"}</td>
                </tr>
              </table>

              <!-- MENSAJE -->
              <div style="margin-top:24px">
                <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#999;margin:0 0 10px">Mensaje</p>
                <div style="border-left:3px solid #2d7a33;background:#f9fdf9;border-radius:0 10px 10px 0;padding:16px 20px;font-size:14px;line-height:1.7;color:#333;white-space:pre-wrap">${mensaje}</div>
              </div>

              <!-- CTA -->
              <div style="margin-top:28px;text-align:center">
                <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#1e5c23,#2d7a33);color:#fff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:50px">
                  Responder a ${nombre}
                </a>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f4f4f0;border-radius:0 0 16px 16px;padding:20px 40px;border:1px solid #e8e8e4;border-top:none;text-align:center">
              <p style="margin:0;font-size:12px;color:#aaa">Este correo fue generado automáticamente desde <a href="https://www.selektafood.com" style="color:#2d7a33;text-decoration:none">selektafood.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}
