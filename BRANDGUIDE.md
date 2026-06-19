# Brand Guide: EduTics Tapachula

## 1. Logo
- El logo ha sido integrado de forma vectorizada (SVG) para garantizar la más alta calidad y escalabilidad en cualquier pantalla.
- **Componente base**: `src/components/Logo.tsx`
- **Variaciones**:
  - **Light/Color**: Utilizado en el `Navbar` (`#F27121` para destacar sobre fondo claro).
  - **Dark/Inverted**: Utilizado en el `Footer` (aplicando filtros `brightness-0 invert` para renderizarlo en color blanco puro sobre fondos oscuros).

## 2. Tipografía
El ecosistema tipográfico sigue un enfoque moderno e hiper-legible adaptado para entornos digitales y educativos.

- **Primaria (Headings)**: `Hanken Grotesk` - Utilizada en titulares, botones clave e identidad general. Transmite peso, tecnología y confianza.
- **Secundaria (Cuerpo textual)**: `Inter` - Altamente legible para párrafos extendidos (Cursos, Sobre Nosotros, Testimonios, descripciones de contacto).
- **Acentos y Datos**: `JetBrains Mono` - Ideal para etiquetas pequeñas, categorías (Ej. "Python & IA", "Express") y elementos técnicos (labels de inputs, badges).

## 3. Paleta de Colores
Enfoque en alta contraste con un manejo de atención de color cálido (Naranja vibrante) combinado con tonos institucionales.

- **Naranja Vibrante** (`#F27121`): Color característico de la marca y del logotipo. Se utiliza en llamadas a la acción, insignias destacadas (Express / Elite), y el logotipo principal.
- **Azul Eléctrico / Primario** (`#0050cd` / `#0866ff`): Utilizado como contraste de confianza. Lo vemos en insignias de nivel Pro, enlaces y tarjetas destacadas.
- **Tonos de Superficie** (Modo Claro de alto contraste):
  - **Fondo General**: `#f8f9fe` (Tintura ligeramente azul puro / blanco).
  - **Tarjetas/Cards**: Cartas renderizadas en Blanco puro o variaciones tipo "Glass-card" con desenfoque de fondo.
  - **Oscuros (Texto On-Surface)**: Grises profundos (`#191c1f`) para alta legibilidad.

## 4. Forma y Botones
- **Esquinas Redondeadas**: Todas las interfaces de la marca utilizan bordes amables (Border Radius amplio: `rounded-full` para botones y chips, `rounded-3xl` y `rounded-2xl` para contenedores de curso y componentes flotantes).
- **Animaciones Discretas**: Microinteracciones como estados `hover` que elevan las tarjetas (traslaciones horizontales) y destellos `active` (scale-95) que aseguran respuesta táctil y moderna en todos los botones clave.

## 5. Fotografía e Imágenes Estilos
- Ambientación de Inteligencia Artificial, trabajo en entornos creativos, tecnológicos, con destellos púrpuras, naranjas y alto contraste azul.
- Referencias en alta calidad `Unsplash` con tonos que combinan con el balance de colores institucional de la plataforma de la academia.
