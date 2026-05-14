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
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#2d6a31;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">Nuevo mensaje de contacto</h1>
            <p style="color:#a8d5a2;margin:4px 0 0;font-size:13px">Selekta — Formulario web</p>
          </div>
          <div style="background:#f9f9f7;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e0;border-top:none">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:13px;color:#666;width:140px">Nombre</td>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:14px;font-weight:600">${nombre}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:13px;color:#666">Empresa</td>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:14px;font-weight:600">${empresa}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:13px;color:#666">Correo</td>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:14px"><a href="mailto:${email}" style="color:#2d6a31">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:13px;color:#666">Teléfono</td>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:14px">${telefono || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:13px;color:#666">Cultivo</td>
                <td style="padding:10px 0;border-bottom:1px solid #ebebeb;font-size:14px">${cultivo || "—"}</td>
              </tr>
            </table>
            <div style="margin-top:24px">
              <p style="font-size:13px;color:#666;margin-bottom:8px">Mensaje</p>
              <div style="background:#fff;border:1px solid #e5e5e0;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;white-space:pre-wrap">${mensaje}</div>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#999">
              Puedes responder directamente a este correo para contactar a ${nombre}.
            </p>
          </div>
        </div>
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
