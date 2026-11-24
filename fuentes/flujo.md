# Checklist FLUJO · 10 piezas antes de cobrar tu automatización

Abre el proyecto de tu automatización en Claude Code (el script, o el JSON que exportas de n8n o de Make) y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. **Nunca pegues en el chat llaves, tokens ni datos reales de los clientes de tu cliente:** Claude los lee del proyecto, no hace falta copiarlos.

Antes de empezar, pega esto una vez:
```
Vas a auditar una automatización que le voy a cobrar a un cliente. Puede ser un script o un flujo exportado de n8n o de Make. Para cada punto que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo o el nodo donde lo viste;
2) si está mal, explícame el riesgo en una frase sin tecnicismos;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (dónde corre, qué servicios usa, quién paga cada uno), pregúntamelo.
```

## 1 · Credenciales a nombre del cliente
```
Haz una lista de cada servicio que usa la automatización (correo, hojas de cálculo, CRM, pagos, IA, WhatsApp) y de qué cuenta sale cada credencial. Márcame las que están a mi nombre o con mi tarjeta. Para cada una, dame los pasos para que el cliente cree su propia cuenta y la conecte, sin que yo tenga que ver su contraseña.
```

## 2 · Reintentos sin duplicados
```
Revisa qué pasa cuando una llamada a otro servicio falla un momento (error de red, 429, 500). Dime si la automatización reintenta, cuántas veces y con qué espera. Luego revisa si un reintento puede repetir algo (cobrar dos veces, mandar dos correos, crear el pedido doble) y propón una forma de evitarlo, por ejemplo un identificador único por pedido que se revise antes de crear.
```

## 3 · Alertas cuando truena
```
Dime cómo me enteraría hoy si la automatización falla a las 3 de la mañana. Si la respuesta es «cuando el cliente me llame», propón un aviso automático a mi correo o a mi WhatsApp con el nombre del paso que falló, la hora y el dato que se procesaba (sin datos personales completos). En n8n puede ser un flujo de errores; en Make, una ruta de manejo de errores.
```

## 4 · Registro de cada corrida
```
Revisa si cada corrida deja registro: cuándo empezó, qué dato entró, qué pasos corrió, en cuál falló y por qué. Dime dónde lo veo hoy y por cuánto tiempo se guarda. Si no alcanza para encontrar un error de hace una semana, propón el registro más simple (una hoja o una tabla) sin guardar datos sensibles de más.
```

## 5 · Datos de prueba separados
```
Revisa si tengo forma de probar sin tocar datos reales: correos de prueba, una hoja o base de prueba, el modo de prueba del proveedor de pagos. Busca cualquier lugar donde una prueba pueda mandar mensajes o correos a clientes reales y propón un interruptor de «modo prueba» que lo impida.
```

## 6 · Tope de gasto con corte automático (que no te vacíen la cuenta)
```
Busca ciclos, disparadores que se llaman a sí mismos y pasos que corren por cada fila o cada mensaje. Dime qué pasaría si se repite sin parar toda una noche y cuánto costaría (IA, mensajes, operaciones del plan). Propón un tope: un contador por día o por mes que detenga la automatización y me avise cuando llegue al límite.
```
Pon también un límite de gasto en el panel de cada servicio de pago que lo permita (IA, mensajes, nube).

## 7 · Versiones del flujo
```
Dime cómo regresaría hoy a la versión que funcionaba ayer si un cambio rompe algo. Si no hay forma, propón guardar cada versión: el JSON exportado en un repositorio de Git con un mensaje por cambio, o el historial de versiones de la herramienta si mi plan lo tiene. Escribe los pasos para volver a la anterior.
```

## 8 · Manual de una hoja
```
Escribe un manual de una sola hoja para mi cliente, sin tecnicismos: qué hace la automatización, cuándo corre, qué servicios usa y quién paga cada uno, qué ve cuando todo va bien, qué hacer si algo falla y a quién llamar. Usa lo que encuentres en el proyecto; lo que no sepas, déjalo marcado para que yo lo llene.
```

## 9 · Plan B manual
```
Imagina que un servicio que usa la automatización se cae un día entero. Para cada paso importante, escribe cómo lo haría el cliente a mano mientras se arregla (por ejemplo: exportar los pedidos del día y mandarlos desde su correo). Que quepa en media hoja y que no necesite entrar a mis cuentas.
```

## 10 · Botón de apagado (el que casi nadie pone)
```
Dime cómo podría mi cliente detener la automatización de inmediato, sin llamarme y sin entrar al código. Propón la forma más simple: un interruptor en una hoja o un formulario que la automatización revise antes de cada corrida, o los pasos para desactivar el flujo en la herramienta. Incluye cómo volver a encenderla.
```
Pruébalo con el cliente el día de la entrega: que lo apague y lo prenda él.

---
¿Hiciste una app, una página web o un bot? Usa la [checklist APP](../app/), la [checklist WEB](../web/) o la [checklist BOT](../bot/).

Fuentes: documentación de n8n (manejo de errores, reintentos y ejecuciones), centro de ayuda de Make (manejo de errores e historial), OWASP API Security Top 10 2023 (API4, consumo de recursos sin límite). Lumière Autómata · lumiereautomata.com
