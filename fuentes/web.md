# Checklist WEB · 10 cosas antes de cobrar tu página web hecha con Claude

Abre tu proyecto en Claude Code y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. No le pidas que cambie todo de golpe.

Antes de empezar, pega esto una vez:
```
Vas a auditar mi página web antes de que la cobre. Para cada punto que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo y la línea donde lo viste;
2) si está mal, explícame el riesgo en una frase sin tecnicismos;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (dónde está publicada, qué hosting o formulario uso), pregúntamelo.
```

## 1 · SEO y cero llaves secretas en el navegador
```
Revisa cada página de mi sitio y dime si tiene un título y una meta descripción propios, un solo h1, texto alternativo en las imágenes, sitemap.xml y robots.txt. Luego busca en todo el código que llega al navegador (incluidas las variables con prefijo VITE_, NEXT_PUBLIC_ o PUBLIC_) llaves secretas: de pago, de OpenAI/Anthropic, del servicio de correo o service_role. Esas no pueden estar en la página.
```
Compruébalo tú: abre `https://tu-sitio.com/sitemap.xml` y envíalo en Google Search Console.

## 2 · Formularios con captcha (filtro contra bots)
```
Lista cada formulario de mi página y dime: si tiene protección contra bots (Cloudflare Turnstile, reCAPTCHA o un campo trampa), si valida los datos en el servidor y no solo en el navegador, y a dónde llegan los mensajes. Propón la protección más simple para cada uno.
```

## 3 · Control de versiones
```
Revisa si el proyecto está en Git, si hay archivos sin commit, si .env y las llaves están en .gitignore, y si alguna llave ya se subió en un commit anterior. Dime cómo regresar a la última versión que funcionaba si un cambio rompe algo.
```

## 4 · Integraciones que sí funcionan
```
Lista cada integración de mi página (formulario → correo, botón de WhatsApp, pagos, mapa, analítica). Para cada una dime si funciona de verdad (haz una prueba si puedes), si las llamadas que usan llaves salen del servidor y no del navegador, y qué ve el visitante si falla.
```

## 5 · Hosting, dominio y HTTPS
```
Dime dónde y cómo está publicada mi página. Si solo corre en localhost, propón el hosting más simple para este proyecto y los pasos para conectar mi dominio. Revisa que todo cargue con HTTPS, que http:// mande a https:// y que no haya contenido mixto.
```
Desde Chrome 68 (2018), toda página sin HTTPS aparece como «No seguro».

## 6 · Rate limiting (que no te vacíen la cuenta)
```
Busca cada endpoint o función que gaste dinero o recursos (envío de correos del formulario, llamadas a IA de un chat, registros). Dime si tiene límite de envíos por IP o por minuto y qué pasaría si un bot lo llama mil veces seguidas. Propón un límite concreto para cada uno.
```
Pon también un tope de gasto en el panel de tu servicio de correo o de cada API de pago.

## 7 · Imágenes ligeras y caché
```
Encuentra las imágenes más pesadas de mi página. Propón convertirlas a WebP o AVIF al tamaño que de verdad se muestra y cargar con lazy loading las que están debajo de la primera pantalla. Revisa los encabezados de caché de los archivos estáticos. Mide antes y después con Lighthouse en modo celular.
```

## 8 · CDN
```
Dime si mi página se sirve desde una CDN (muchos hostings ya la incluyen). Si no, propón cómo activarla para los archivos estáticos y dime qué no debe guardarse en caché (formularios y páginas con datos de cada usuario).
```

## 9 · Monitoreo de caídas
```
Dime cómo me enteraría hoy si mi página se cae. Si la respuesta es «cuando un cliente me avise», propón un monitor de disponibilidad gratuito que la revise cada pocos minutos y me avise por correo, y dónde ver los errores en mi hosting. Conéctalo solo después de que te diga «sí».
```

## 10 · Respaldos (el que casi nadie hace)
```
Dime qué hay que respaldar en mi página (código en Git, base de datos o CMS, imágenes subidas, variables de entorno) y si hoy existe una copia automática de cada cosa. Dame los pasos para sacar una copia propia y para restaurarla en un sitio de prueba. Quiero probar la restauración una vez.
```
Un respaldo que nunca restauraste no sabes si sirve.

---
¿Hiciste una app y no una página? Usa la [checklist APP](../app/).

Fuentes: Google Search Central (sitemaps), Vite (variables de entorno), Cloudflare (Turnstile), Google (Chrome 68 y el aviso «No seguro»), OWASP API Security Top 10 2023 (API4, consumo de recursos sin límite). Lumière Autómata · lumiereautomata.com
