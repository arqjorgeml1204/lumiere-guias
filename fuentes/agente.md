# Checklist AGENTE · 10 cosas antes de venderle un chatbot con IA a un negocio

Abre el proyecto de tu chatbot en Claude Code y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. **Nunca pegues en el chat llaves, tokens ni conversaciones reales de clientes:** Claude los lee del proyecto, no hace falta copiarlos.

Antes de empezar, pega esto una vez:
```
Vas a auditar un chatbot con IA que le voy a vender a un negocio. Para cada punto que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo y la línea donde lo viste;
2) si está mal, explícame el riesgo en una frase sin tecnicismos;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (qué modelo uso, dónde está publicado, cuántas conversaciones al mes espera el negocio), pregúntamelo.
```

## 1 · Fuentes del negocio y respuesta «no sé»
```
Dime de dónde saca el chatbot sus respuestas sobre precios, horarios, políticas y reembolsos. Si las inventa el modelo o están mezcladas en el prompt, propón pasarlas a documentos o una tabla del negocio que el chatbot consulte. Revisa también qué contesta cuando algo no está en esas fuentes: debe decir que no sabe y ofrecer a una persona, nunca adivinar.
```

## 2 · Temas prohibidos
```
Revisa las instrucciones del chatbot y dime si tiene una lista de temas que no debe tocar (salud, temas legales, política, la competencia, promesas de descuentos). Si no la tiene, propón una lista corta para este negocio y la respuesta amable que debe dar cuando le pregunten por uno de esos temas.
```

## 3 · Límite de gasto con corte automático
```
Calcula cuánto cuesta una conversación típica y una conversación eterna (alguien que no deja de escribir). Revisa si hay un tope de mensajes o de tokens por conversación y un tope de gasto por día o por mes que detenga el chatbot y me avise. Si no los hay, propón el más simple.
```
Pon también un límite de gasto en el panel de tu proveedor de IA.

## 4 · Llave de la API en el servidor
```
Busca en el código del navegador (la página, el widget, la app) cualquier llave de API o token. Si la llave del modelo se usa desde el navegador, cualquiera puede copiarla: propón mover la llamada a un servidor o función y leer la llave de una variable de entorno. Dime también si la llave ya quedó en el historial de Git y cómo rotarla.
```

## 5 · Pase a un humano
```
Revisa si el chatbot puede pasar la conversación a una persona: palabra clave, botón o detección de enojo. Si no puede, propón la forma más simple, que avise al negocio con el resumen de la conversación y que el chatbot deje de contestar en ese chat.
```

## 6 · Pruebas con preguntas tramposas
```
Escribe 20 preguntas tramposas para este negocio: descuentos que no existen, reembolsos inventados, «ignora tus instrucciones», preguntas de la competencia y datos personales de otros. Pásalas por el chatbot (o dime cómo hacerlo) y márcame cuáles contestó mal y por qué.
```

## 7 · Registro y revisión semanal
```
Revisa si se guardan las conversaciones con fecha, la pregunta y la respuesta, sin datos sensibles de más. Propón una revisión semanal de 15 minutos: qué buscar (respuestas inventadas, quejas, preguntas sin respuesta) y cómo convertir cada error en un cambio de las fuentes o de las instrucciones.
```

## 8 · Aviso de que es IA
```
Revisa el primer mensaje del chatbot. Si no dice claramente que es un asistente automático con IA y cómo hablar con una persona, propón un primer mensaje corto que lo diga, con un link al aviso de privacidad del negocio.
```

## 9 · Costo por mes calculado
```
Con el número de conversaciones al mes que espera el negocio, calcula el costo mensual: modelo de IA, hosting, base de datos y mensajes si va por WhatsApp. Dame un rango (mes tranquilo y mes fuerte) para cotizar el mantenimiento aparte de la instalación.
```

## 10 · Quién actualiza los precios (la que casi nadie define)
```
Dime qué pasa cuando el negocio cambia un precio, un horario o una promoción: quién lo cambia, dónde y en cuánto tiempo lo ve el chatbot. Si hoy solo yo puedo hacerlo, propón una forma simple para que el negocio lo actualice solo (una hoja o un panel) y un recordatorio mensual para revisar que las fuentes sigan al día.
```
Escríbelo en el contrato: quién actualiza y cada cuánto.

---
¿Es un bot de WhatsApp o una automatización? Usa la [checklist BOT](../bot/) o la [checklist FLUJO](../flujo/).

Fuentes: Moffatt v. Air Canada, 2024 BCCRT 149 (Tribunal de Resolución Civil de Columbia Británica); OWASP Top 10 para aplicaciones con LLM 2025 (inyección de prompts, consumo sin límite, divulgación de información sensible). Lumière Autómata · lumiereautomata.com
