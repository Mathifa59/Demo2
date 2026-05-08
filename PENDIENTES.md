# Pendientes — Selekta Web

## Requieren información del cliente

### 1. Confirmar nombre de producto "Jois Cam"
El nombre aparece en nav, HowItWorks, JoisCam, Blog y ContactForm.
Si cambia, hay que actualizar todos esos puntos.

### 2. Fotos reales
Las siguientes secciones usan fotos de stock de Unsplash. Reemplazar cuando el cliente entregue material propio:
- **Hero** — fondo y foto lateral derecha
- **Nosotros** — foto del equipo en planta
- **Productos** — imágenes de Palta Hass, Frijol chino, Frijol Castilla y Pallar
- **JoisCam** — foto de la línea de selección
- **Blog** — portadas de los 3 artículos

### 3. Artículos del Blog
Los 3 posts tienen `href="#blog"` como placeholder. Pendiente definir:
- ¿Se crean páginas estáticas por artículo (`/blog/nombre-articulo`)?
- ¿O se integra un CMS (Notion, Sanity, etc.)?

### 4. Redes sociales
LinkedIn e Instagram en el Footer apuntan a `href="#"`.
El cliente debe entregar las URLs reales de sus perfiles.

### 5. Paleta de colores oficial
Los colores actuales se estimaron visualmente desde el logo (verde lima `#8CC63F`, azul `#1B50A0`).
El PDF del manual de marca (`public/assets/Manual de Marca - SELEKTA.pdf`) no fue legible.
Confirmar con el cliente si la paleta actual es correcta.

### 10. Cifra real de toneladas aprovechadas
En el Hero hay una tarjeta animada con contador "Toneladas aprovechadas — 12,540 t".
El número es **provisional**. Pedir al cliente la cifra real (acumulado o por año) para reemplazar el `end={12540}` en `src/components/Hero.tsx`.

---

## Tareas técnicas (se pueden hacer sin el cliente)

### 6. Envío real del formulario de contacto
`src/components/ContactForm.tsx` actualmente simula el envío con un `setTimeout`.
Integrar un servicio de email: **Resend**, **Formspree** o **EmailJS**.

### 7. Newsletter del Blog
El botón "Suscribir" en `src/components/Blog.tsx` no hace nada (`e.preventDefault()`).
Conectar a un servicio: **Mailchimp**, **Resend**, etc.

### 8. SEO — sitemap.xml
Falta `src/app/sitemap.ts`. Next.js lo genera automáticamente si se crea el archivo.
Rutas a incluir: `/`, `/nosotros`, `/jois-cam`, `/beneficios`, `/productos`, `/blog`, `/contacto`.

### 9. SEO — robots.txt
Falta `src/app/robots.ts`. Necesario para indicar a los motores de búsqueda qué indexar.

---

## Hecho en esta sesión

- ✅ Botón **"Quejas y sugerencias"** en el Footer (columna "Síguenos"), abre el Google Form en pestaña nueva.
- ✅ Tarjeta animada **"Toneladas aprovechadas"** en el Hero (count-up con `IntersectionObserver`, easing cubic-out, duración 4.5 s). Componente reutilizable en `src/components/CountUp.tsx`.
