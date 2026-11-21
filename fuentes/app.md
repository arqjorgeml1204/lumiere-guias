# Checklist APP · 10 cosas antes de cobrar tu app hecha con Claude

Abre tu proyecto en Claude Code y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. No le pidas que cambie todo de golpe.

Antes de empezar, pega esto una vez:
```
Vas a auditar mi app antes de que la cobre. Para cada punto que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo y la línea donde lo viste;
2) si está mal, explícame el riesgo en una frase sin tecnicismos;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (dónde está publicada, qué base de datos uso), pregúntamelo.
```

## 1 · Front-end sin source maps ni llaves expuestas
```
Revisa la configuración de build (vite.config, next.config o la que use) y dime si en producción se generan source maps. Luego busca en todo el front-end variables con prefijo VITE_, NEXT_PUBLIC_ o similares y dime cuáles son secretas (llaves de pago, de OpenAI/Anthropic, service_role). Esas no pueden estar en el navegador.
```
Compruébalo tú: abre `https://tu-sitio.com/assets/<archivo>.js.map`. Si se descarga, está expuesto.

## 2 · Base de datos con RLS (candado por usuario)
```
Lista todas las tablas de mi base de datos y dime cuáles tienen Row Level Security activado y qué políticas tienen. Marca en rojo cualquier tabla que se pueda leer o escribir con la llave pública (anon) sin iniciar sesión, o donde un usuario pueda ver datos de otro.
```

## 3 · Control de versiones
```
Revisa si el proyecto está en Git, si hay archivos sin commit, si .env y las llaves están en .gitignore, y si alguna llave ya se subió en un commit anterior. Dime cómo regresar a la última versión que funcionaba si un cambio rompe algo.
```

## 4 · APIs bien conectadas
```
Lista cada servicio externo que usa mi app (pagos, correo, WhatsApp, IA). Para cada uno dime: si la llamada sale del servidor y no del navegador, qué pasa si el servicio falla o tarda (¿hay tiempo límite y mensaje de error?) y si los webhooks verifican la firma.
```

## 5 · Hosting y deploy
```
Dime dónde y cómo está publicada mi app. Si solo corre en localhost, propón el hosting más simple para este stack y la lista de variables de entorno que tengo que cargar allá. Revisa que el dominio tenga HTTPS.
```

## 6 · Rate limiting (que no te vacíen la cuenta)
```
Busca cada endpoint o función que gaste dinero o recursos (llamadas a IA, envío de correos o SMS, registros, inicio de sesión). Dime si tiene límite de peticiones por usuario o por IP y qué pasaría si alguien lo llama mil veces seguidas. Propón un límite concreto para cada uno.
```
Pon también un tope de gasto mensual en el panel de cada API de pago.

## 7 · Caché
```
Encuentra las 3 páginas o consultas más lentas de mi app y dime cuáles podrían guardarse en caché, por cuánto tiempo y qué dato no debe cachearse nunca (lo privado de cada usuario).
```

## 8 · Escalabilidad
```
Imagina que mañana entran 1 000 usuarios al mismo tiempo. Dime qué se rompería primero en mi app (conexiones a la base de datos, límites del plan gratis, funciones que tardan, archivos grandes) y en qué orden lo arreglarías. Dame los límites reales del plan que uso.
```

## 9 · Monitoreo
```
Dime cómo me enteraría hoy si mi app falla en producción. Si la respuesta es «cuando un cliente se queje», propón la forma más simple de recibir un aviso de errores (registro de errores del hosting, Sentry u otro) y conéctalo solo después de que te diga «sí».
```

## 10 · Respaldos (el que casi nadie hace)
```
Dime si mi base de datos tiene respaldos automáticos, cada cuánto y por cuántos días se guardan en mi plan. Luego dame el comando para sacar una copia propia (por ejemplo, supabase db dump) y los pasos para restaurarla en un proyecto de prueba. Quiero probar la restauración una vez.
```
Un respaldo que nunca restauraste no sabes si sirve.

---
¿Hiciste una página web y no una app? Usa la [checklist WEB](../web/).

Fuentes: Vite (build options y variables de entorno), Supabase (Row Level Security y respaldos), OWASP API Security Top 10 2023 (API4, consumo de recursos sin límite). Lumière Autómata · lumiereautomata.com
