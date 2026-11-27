# Checklist DEMANDA · 6 cosas por las que tu app puede recibir una demanda antes de vender

Abre el proyecto de tu app en Claude Code y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. Las cifras del video son de leyes de Estados Unidos y de la Unión Europea: aplican si tienes usuarios allá (y en internet casi siempre los tienes). **No es asesoría legal:** si vas a cobrar en serio, valida cada punto con un abogado.

Antes de empezar, pega esto una vez:
```
Vas a revisar mi app por riesgos legales que se cobran «por» persona, sesión o correo, no por porcentaje de ventas. Para cada punto que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo y la línea donde lo viste;
2) si está mal, explícame en una frase qué ley lo pide y por qué es un riesgo;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (a qué países va dirigida, si pide registro, qué servicios externos usa), pregúntamelo.
```

## 1 · Edad en el registro (COPPA)
```
Revisa el formulario de registro. ¿Pregunta la edad o la fecha de nacimiento? En Estados Unidos, COPPA (16 CFR 312) pide permiso verificable de los padres para recoger datos de menores de 13 años, con multas de hasta 53,088 dólares por infracción. Propón una puerta de edad neutral (sin sugerir la respuesta) y qué hacer si alguien pone menos de 13: no crear la cuenta y no guardar sus datos.
```

## 2 · Fuentes en tu propio servidor (Google Fonts)
```
Busca en el proyecto si las fuentes se cargan desde fonts.googleapis.com o fonts.gstatic.com (CSS, HTML, next/font, librerías de UI). Eso manda la IP del visitante a Google sin su permiso; un tribunal de Múnich (LG München I, 3 O 17493/20, 20-ene-2022) condenó a un sitio a pagar 100 euros a un solo visitante. Propón descargar las fuentes y servirlas desde mi dominio, con los cambios exactos.
```

## 3 · Grabación de sesiones apagada o con permiso
```
Lista las herramientas de analítica que usa la app (Hotjar, Clarity, FullStory, PostHog, LogRocket, Smartlook, etc.) y dime si alguna tiene grabación de sesiones o captura de teclas activada. En California, grabar lo que alguien escribe sin su consentimiento se ha demandado como espionaje (CIPA § 631, hasta 5,000 dólares por infracción, § 637.2). Propón apagarla o pedir permiso antes, y enmascarar siempre campos de contraseña, tarjeta y datos personales.
```

## 4 · Link para darse de baja y dirección en tus correos
```
Revisa cada correo que manda la app o mi herramienta de correo (bienvenida, lanzamiento, novedades, lista de espera). Por CAN-SPAM (15 U.S.C. § 7704), los correos comerciales necesitan un link para darse de baja que funcione y una dirección postal física, con multas de hasta 53,088 dólares por correo. Dime cuáles cumplen y escribe el pie de correo que falta.
```

## 5 · Términos de renovación junto al botón (California)
```
Revisa la pantalla donde alguien se suscribe (Stripe Checkout, Billing o mi propio formulario). La ley de renovación automática de California (Business and Professions Code § 17600 y siguientes) pide mostrar, claro y junto al botón, que se renueva solo, cada cuánto, cuánto cuesta y cómo cancelar, y guardar el consentimiento; si no, lo cobrado se trata como un regalo (§ 17603). Dime qué falta y escribe el texto para ponerlo junto al botón y en el correo de confirmación.
```

## 6 · Agente DMCA registrado (si tus usuarios suben archivos)
```
Revisa si la app deja que los usuarios suban imágenes, videos o textos. Si sí, para protegerme por lo que suban otros necesito un agente designado DMCA registrado en la Oficina de Derechos de Autor de Estados Unidos (dmca.copyright.gov; la cuota es de 6 dólares, revisa si cambió) y una página de avisos y retiro. Sin eso, una infracción puede costar hasta 150,000 dólares por obra. Arma la página de avisos, el correo de contacto y los pasos para registrar el agente.
```

Fuentes: FTC (COPPA, 16 CFR 312 y ajuste de multas por inflación) · LG München I, 3 O 17493/20 (20-ene-2022) · Código Penal de California §§ 631 y 637.2 (CIPA) · 15 U.S.C. § 7704 (CAN-SPAM) y multas de la FTC · Business and Professions Code de California §§ 17600–17606 · 17 U.S.C. § 512(c) y dmca.copyright.gov.
