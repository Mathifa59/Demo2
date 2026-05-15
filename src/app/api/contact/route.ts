import { Resend } from "resend";
import { NextRequest } from "next/server";
const LOGO_URL = "https://www.selektafood.com/assets/SELEKTA_fondo_blanco.png";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATARIOS = ["tkuriyama@joisfood.com", "jdelgado@joisfood.com", "taofoodsperu@gmail.com"];

// ── Rate limiting ──────────────────────────────────────────────
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const ipStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipStore.get(ip);
  if (!entry || now > entry.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

// ── Sanitización ───────────────────────────────────────────────
function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .slice(0, 2000)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Handler ────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { ok: false, error: "Demasiados intentos. Intenta en unos minutos." },
        { status: 429 }
      );
    }

    const body = await req.json();

    if (body.website) {
      return Response.json({ ok: true });
    }

    const nombre   = sanitize(body.nombre);
    const empresa  = sanitize(body.empresa);
    const email    = sanitize(body.email);
    const telefono = sanitize(body.telefono);
    const cultivo  = sanitize(body.cultivo);
    const mensaje  = sanitize(body.mensaje);

    if (!nombre || !empresa || !email || !mensaje) {
      return Response.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ ok: false, error: "Correo inválido." }, { status: 400 });
    }

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<style>
  :root { color-scheme: light dark; }

  /* ── LIGHT MODE (default) ── */
  .em-body        { background-color: #f0f2f0 !important; }
  .em-wrap        { background-color: #f0f2f0 !important; }
  .em-topbar      { background-color: #2a6e30 !important; }
  .em-header      { background-color: #ffffff !important; border-color: #e8ede8 !important; }
  .em-title-area  { background-color: #ffffff !important; border-color: #e8ede8 !important; }
  .em-title       { color: #1a2e1b !important; }
  .em-subtitle    { color: #8db090 !important; }
  .em-divider     { border-color: #eef2ee !important; }
  .em-cards-bg    { background-color: #f0f2f0 !important; border-color: #e8ede8 !important; }
  .em-card        { background-color: #ffffff !important; border-color: #edf2ed !important; }
  .em-label       { color: #8db090 !important; }
  .em-value       { color: #1a2e1b !important; }
  .em-link        { color: #2a6e30 !important; }
  .em-msg-area    { background-color: #ffffff !important; border-color: #e8ede8 !important; }
  .em-msg-block   { background-color: #f6faf6 !important; border-left-color: #2a6e30 !important; color: #2d3d2e !important; }
  .em-btn-area    { background-color: #ffffff !important; border-color: #e8ede8 !important; }
  .em-btn         { background-color: #2a6e30 !important; color: #ffffff !important; }
  .em-footer      { background-color: #eaf0ea !important; border-color: #e8ede8 !important; }
  .em-footer-text { color: #9aac9b !important; }
  .em-chip        { background-color: #f0faf1 !important; color: #2a6e30 !important; border-color: #b8debb !important; }

  /* ── DARK MODE ── */
  @media (prefers-color-scheme: dark) {
    .em-body        { background-color: #0e1a0f !important; }
    .em-wrap        { background-color: #0e1a0f !important; }
    .em-topbar      { background-color: #3a8a42 !important; }
    .em-header      { background-color: #162118 !important; border-color: #2a3d2b !important; }
    .em-title-area  { background-color: #162118 !important; border-color: #2a3d2b !important; }
    .em-title       { color: #e8f5e9 !important; }
    .em-subtitle    { color: #6aaa6e !important; }
    .em-divider     { border-color: #2a3d2b !important; }
    .em-cards-bg    { background-color: #0e1a0f !important; border-color: #2a3d2b !important; }
    .em-card        { background-color: #1a2d1c !important; border-color: #2a3d2b !important; }
    .em-label       { color: #6aaa6e !important; }
    .em-value       { color: #d4edd5 !important; }
    .em-link        { color: #7ecb82 !important; }
    .em-msg-area    { background-color: #162118 !important; border-color: #2a3d2b !important; }
    .em-msg-block   { background-color: #1a2d1c !important; border-left-color: #4caf50 !important; color: #c8e6c9 !important; }
    .em-btn-area    { background-color: #162118 !important; border-color: #2a3d2b !important; }
    .em-btn         { background-color: #3a8a42 !important; color: #ffffff !important; }
    .em-footer      { background-color: #0d160e !important; border-color: #2a3d2b !important; }
    .em-footer-text { color: #6aaa6e !important; }
    .em-chip        { background-color: #1e3a20 !important; color: #7ecb82 !important; border-color: #3a6b3d !important; }
  }

  /* ── OUTLOOK dark mode overrides ── */
  [data-ogsc] .em-body        { background-color: #0e1a0f !important; }
  [data-ogsc] .em-header      { background-color: #162118 !important; }
  [data-ogsc] .em-title       { color: #e8f5e9 !important; }
  [data-ogsc] .em-card        { background-color: #1a2d1c !important; }
  [data-ogsc] .em-value       { color: #d4edd5 !important; }
  [data-ogsc] .em-msg-block   { background-color: #1a2d1c !important; color: #c8e6c9 !important; }
</style>
</head>
<body class="em-body" style="margin:0;padding:0;background-color:#f0f2f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
<table class="em-wrap" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f2f0;padding:32px 16px">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%">

  <!-- BARRA VERDE -->
  <tr><td class="em-topbar" height="6" style="background-color:#2a6e30;border-radius:12px 12px 0 0;font-size:0;line-height:0">&nbsp;</td></tr>

  <!-- HEADER -->
  <tr><td class="em-header" style="background-color:#ffffff;padding:24px 36px 20px;border-left:1px solid #e8ede8;border-right:1px solid #e8ede8">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td valign="middle">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td bgcolor="#ffffff" style="background:#ffffff;padding:8px 12px;border-radius:10px;">
              <img src="${LOGO_URL}" alt="Selekta Food" width="110"
                   style="display:block;width:110px;height:auto;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
        </table>
      </td>
      <td align="right" valign="middle">
        <span class="em-chip" style="display:inline-block;background-color:#f0faf1;color:#2a6e30;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:6px 14px;border-radius:20px;border:1px solid #b8debb">FORMULARIO WEB</span>
      </td>
    </tr></table>
  </td></tr>

  <!-- TÍTULO -->
  <tr><td class="em-title-area" style="background-color:#ffffff;padding:20px 36px 28px;border-left:1px solid #e8ede8;border-right:1px solid #e8ede8">
    <div style="border-top:1px solid #eef2ee;padding-top:20px">
      <p class="em-title" style="margin:0 0 7px;font-size:22px;font-weight:700;color:#1a2e1b;letter-spacing:-0.2px;line-height:1.2">Nuevo mensaje de contacto</p>
      <p class="em-subtitle" style="margin:0;font-size:13px;color:#8db090">${nombre} quiere ponerse en contacto desde selektafood.com</p>
    </div>
  </td></tr>

  <!-- CARDS 2 columnas -->
  <tr><td class="em-cards-bg" style="background-color:#f0f2f0;padding:20px 36px 0;border-left:1px solid #e8ede8;border-right:1px solid #e8ede8">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="48%" valign="top">
          <div class="em-card" style="background-color:#ffffff;border-radius:12px;padding:16px 18px;margin-bottom:12px;border:1px solid #edf2ed">
            <p class="em-label" style="margin:0 0 5px;font-size:10px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#8db090">NOMBRE</p>
            <p class="em-value" style="margin:0;font-size:14px;font-weight:600;color:#1a2e1b">${nombre}</p>
          </div>
        </td>
        <td width="4%"></td>
        <td width="48%" valign="top">
          <div class="em-card" style="background-color:#ffffff;border-radius:12px;padding:16px 18px;margin-bottom:12px;border:1px solid #edf2ed">
            <p class="em-label" style="margin:0 0 5px;font-size:10px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#8db090">EMPRESA</p>
            <p class="em-value" style="margin:0;font-size:14px;font-weight:600;color:#1a2e1b">${empresa}</p>
          </div>
        </td>
      </tr>
      <tr>
        <td width="48%" valign="top">
          <div class="em-card" style="background-color:#ffffff;border-radius:12px;padding:16px 18px;margin-bottom:12px;border:1px solid #edf2ed">
            <p class="em-label" style="margin:0 0 5px;font-size:10px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#8db090">CORREO</p>
            <a class="em-link" href="mailto:${email}" style="margin:0;font-size:14px;font-weight:600;color:#2a6e30;text-decoration:none;display:block">${email}</a>
          </div>
        </td>
        <td width="4%"></td>
        <td width="48%" valign="top">
          <div class="em-card" style="background-color:#ffffff;border-radius:12px;padding:16px 18px;margin-bottom:12px;border:1px solid #edf2ed">
            <p class="em-label" style="margin:0 0 5px;font-size:10px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#8db090">TELÉFONO</p>
            <p class="em-value" style="margin:0;font-size:14px;font-weight:600;color:#1a2e1b">${telefono || "—"}</p>
          </div>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- CARD CULTIVO -->
  <tr><td class="em-cards-bg" style="background-color:#f0f2f0;padding:0 36px 20px;border-left:1px solid #e8ede8;border-right:1px solid #e8ede8">
    <div class="em-card" style="background-color:#ffffff;border-radius:12px;padding:16px 18px;border:1px solid #edf2ed">
      <p class="em-label" style="margin:0 0 5px;font-size:10px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#8db090">CULTIVO</p>
      <p class="em-value" style="margin:0;font-size:14px;font-weight:600;color:#1a2e1b">${cultivo || "—"}</p>
    </div>
  </td></tr>

  <!-- MENSAJE -->
  <tr><td class="em-msg-area" style="background-color:#ffffff;padding:8px 36px 20px;border-left:1px solid #e8ede8;border-right:1px solid #e8ede8">
    <p class="em-label" style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#8db090">MENSAJE</p>
    <div class="em-msg-block" style="background-color:#f6faf6;border-left:3px solid #2a6e30;border-radius:0 10px 10px 0;padding:16px 20px;font-size:14px;line-height:1.75;color:#2d3d2e;white-space:pre-wrap">${mensaje}</div>
  </td></tr>

  <!-- BOTÓN -->
  <tr><td class="em-btn-area" style="background-color:#ffffff;padding:12px 36px 36px;border-left:1px solid #e8ede8;border-right:1px solid #e8ede8;text-align:center">
    <a class="em-btn" href="mailto:${email}" style="display:inline-block;background-color:#2a6e30;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:50px;letter-spacing:0.02em">
      Responder a ${nombre} &rarr;
    </a>
  </td></tr>

  <!-- FOOTER -->
  <tr><td class="em-footer" style="background-color:#eaf0ea;border-radius:0 0 12px 12px;padding:18px 36px;border:1px solid #e8ede8;border-top:none;text-align:center">
    <p class="em-footer-text" style="margin:0;font-size:12px;color:#9aac9b">
      Generado automáticamente &middot; <a class="em-link" href="https://www.selektafood.com" style="color:#2a6e30;text-decoration:none">selektafood.com</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from: "Selekta Web <contacto@selektafood.com>",
      to: DESTINATARIOS,
      replyTo: email,
      subject: `Nuevo contacto desde la web — ${nombre} (${empresa})`,
      html,
    });

    if (error) {
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}
