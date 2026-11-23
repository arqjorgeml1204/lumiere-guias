# Checklist BOT · 10 cosas antes de cobrar tu bot de WhatsApp

Abre el proyecto de tu bot en Claude Code y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. No le pidas que cambie todo de golpe. **Nunca pegues en el chat llaves, tokens ni conversaciones reales de clientes:** Claude las lee del proyecto, no hace falta copiarlas.

Antes de empezar, pega esto una vez:
```
Vas a auditar mi bot de WhatsApp antes de que se lo cobre a un negocio. Para cada punto que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo y la línea donde lo viste;
2) si está mal, explícame el riesgo en una frase sin tecnicismos;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (qué proveedor de WhatsApp uso, dónde está publicado), pregúntamelo.
```

## 1 · API oficial de WhatsApp Business
```
Dime cómo se conecta mi bot a WhatsApp. Si usa una librería que simula WhatsApp Web o un número personal (whatsapp-web.js, Baileys o similares), explícame el riesgo de bloqueo y los pasos para pasarlo a la WhatsApp Business Platform (Cloud API de Meta o un proveedor oficial). Si ya usa la API oficial, revisa que el token salga de variables de entorno y no del código.
```

## 2 · Plantillas aprobadas y permiso del cliente
```
Busca todos los lugares donde el bot le escribe primero al cliente (recordatorios, seguimientos, promociones). Dime cuáles pueden salir más de 24 horas después del último mensaje del cliente: esos necesitan una plantilla aprobada por Meta. Revisa también si guardo el permiso (opt-in) del cliente para escribirle.
```

## 3 · Pase a un humano
```
Revisa si mi bot tiene una forma de pasar la conversación a una persona: palabra clave, botón o detección de enojo. Si no la tiene, propón la más simple, que avise al dueño y que el bot deje de contestar en ese chat hasta que la persona lo libere.
```

## 4 · Horario
```
Dime qué contesta mi bot fuera del horario del negocio. Propón un mensaje fuera de horario que diga cuándo le van a contestar, con el horario y la zona horaria en una configuración fácil de cambiar.
```

## 5 · Datos del negocio y pruebas
```
Dime de dónde saca el bot los precios, promociones y horarios. Si están escritos en el prompt o los inventa el modelo, propón pasarlos a un archivo o una tabla que el negocio pueda actualizar. Luego escribe 15 preguntas tramposas (precios que no existen, descuentos inventados, temas fuera del negocio) para probar que el bot no invente.
```

## 6 · Límite de mensajes (que no te vacíen la cuenta)
```
Revisa si mi bot tiene límite de mensajes por número y por minuto, y un tope de llamadas a la IA por conversación. Dime qué pasaría si alguien le manda mil mensajes seguidos y cuánto me costaría. Propón el límite más simple.
```
Pon también un tope de gasto mensual en el panel de cada API de pago (Meta, el proveedor de IA).

## 7 · Historial
```
Revisa si mi bot guarda el historial de cada conversación (qué preguntó el cliente y qué contestó el bot, con fecha). Si no, propón dónde guardarlo, por cuánto tiempo y cómo buscar una conversación cuando un cliente reclame.
```

## 8 · Aviso de privacidad
```
Lista qué datos personales pide o guarda mi bot (nombre, teléfono, dirección, pedidos). Escribe un aviso de privacidad corto para mandarlo en el primer mensaje, con un link al aviso completo del negocio. No es asesoría legal: el texto final lo revisa el negocio.
```

## 9 · Monitoreo
```
Dime cómo me enteraría hoy si mi bot deja de contestar (webhook caído, token vencido, saldo agotado). Si la respuesta es «cuando el dueño se queje», propón un aviso automático a mi correo o mi WhatsApp cuando haya errores o cuando pasen 30 minutos sin respuestas.
```

## 10 · Respaldos probados (el que casi nadie hace)
```
Dime qué guarda mi bot (contactos, conversaciones, pedidos, configuración) y si eso tiene respaldo automático. Dame los pasos para sacar una copia y para restaurarla en un proyecto de prueba. Quiero probar la restauración antes de entregar el bot.
```
Un respaldo que nunca restauraste no sabes si sirve.

---
¿Hiciste una app o una página web? Usa la [checklist APP](../app/) o la [checklist WEB](../web/).

Fuentes: Meta for Developers (WhatsApp Cloud API, ventanas de atención al cliente y plantillas), WhatsApp (preguntas frecuentes sobre bloqueos de cuentas), OWASP API Security Top 10 2023 (API4, consumo de recursos sin límite), LFPDPPP (México). Lumière Autómata · lumiereautomata.com
