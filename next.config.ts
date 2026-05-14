import type { NextConfig } from "next";
import path from "node:path";

const securityHeaders = [
  // Evita que el sitio sea embebido en iframes de otros dominios (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Evita que el navegador adivine el tipo de contenido
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Activa protección XSS en navegadores antiguos
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Controla qué información se envía en el header Referer
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Fuerza HTTPS por 1 año
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Restringe acceso a APIs sensibles del navegador
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
