# Checklist TIENDA · 10 capas antes de cobrar tu tienda en línea

Abre el proyecto de tu tienda en Claude Code y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. **Nunca pegues en el chat llaves, tokens ni datos de clientes:** Claude los lee del proyecto, no hace falta copiarlos.

Antes de empezar, pega esto una vez:
```
Vas a auditar mi tienda en línea antes de cobrarla o entregarla. Para cada capa que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo y la línea donde lo viste;
2) si está mal, explícame el riesgo en una frase sin tecnicismos;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (qué proveedor de pagos uso, dónde está publicada, en qué país vendo), pregúntamelo.
```

## 1 · Pago verificado por el proveedor
```
Dime en qué momento mi tienda marca un pedido como «pagado». Si lo hace cuando el cliente regresa a la página de gracias o con un dato que manda el navegador, explícame el riesgo y propón marcarlo solo con el webhook del proveedor de pagos, verificando su firma y que el monto y el pedido coincidan. Revisa también que un webhook repetido no duplique el pedido.
```

## 2 · Reserva de inventario al pagar
```
Revisa cómo se descuenta el inventario. Dime qué pasa si dos personas compran la última pieza al mismo tiempo. Propón reservar o descontar la pieza en una operación atómica cuando el pago se confirma, y liberar las reservas de pagos que nunca se completaron.
```

## 3 · Correo de confirmación
```
Revisa si el cliente recibe un correo cuando su pago se confirma, con número de pedido, productos, total y cómo contactar a la tienda. Si no, propón enviarlo desde el mismo lugar donde se confirma el pago, con un servicio de correo transaccional, y dime cómo probar que llega y que no cae en spam.
```

## 4 · La tarjeta la cobra el proveedor, nunca tú
```
Busca en el código y en la base de datos cualquier lugar donde se reciban o guarden números de tarjeta, fechas de vencimiento o CVV. Si existe, explícame el riesgo y propón usar el formulario o la página de pago del proveedor para que la tarjeta nunca toque mi servidor. Lo único que guardo es la referencia del pago.
```

## 5 · Impuestos y factura desde el principio
```
Revisa cómo calcula mi tienda los impuestos y si los precios los incluyen o no. Dime qué datos necesitaría para emitir factura (en México: RFC, régimen, uso, código postal) y propón pedirlos de forma opcional en el checkout. No es asesoría fiscal: lo confirmo con un contador.
```

## 6 · Envío calculado en el carrito (que no te vacíen la cuenta)
```
Revisa cómo se cobra el envío. Si es un monto fijo, calcula con mis productos y destinos en qué casos el envío me cuesta más de lo que cobro. Propón calcularlo en el carrito por peso, zona o con la tarifa de la paquetería, y mostrarlo antes de pagar.
```

## 7 · Modo prueba del proveedor
```
Revisa si tengo separadas las llaves de prueba y las de producción del proveedor de pagos, y si puedo probar compras completas con tarjetas de prueba sin cobros reales. Busca cualquier lugar donde una prueba pueda usar las llaves de producción y propón cómo evitarlo.
```

## 8 · Carga rápida en celular
```
Mide o estima cuánto tarda en cargar en un celular la página de producto y el checkout. Dime las tres cosas que más la frenan (imágenes pesadas, scripts, fuentes) y propón el arreglo más simple para cada una. La meta es que el botón de pagar aparezca en menos de 3 segundos en una conexión móvil.
```

## 9 · Devoluciones claras por escrito
```
Revisa si la tienda muestra una política de devoluciones antes de pagar: plazo, en qué estado debe llegar el producto, quién paga el envío de regreso y cómo se reembolsa. Si no existe, escribe un borrador corto que el negocio pueda ajustar, y dime dónde ponerlo. No es asesoría legal.
```

## 10 · Respaldo de pedidos (la que casi nadie hace)
```
Dime dónde viven los pedidos, clientes y productos, y si hay un respaldo automático diario. Dame los pasos para sacar una copia y para restaurarla en una base de prueba. Quiero probar la restauración antes de lanzar.
```
Un respaldo que nunca restauraste no sabes si sirve.

---
¿Hiciste una app o un chatbot? Usa la [checklist APP](../app/) o la [checklist AGENTE](../agente/).

Fuentes: documentación de Stripe y Mercado Pago (webhooks y modo de prueba), PCI DSS v4.0 (datos de tarjeta), Google web.dev (Core Web Vitals). Lumière Autómata · lumiereautomata.com
