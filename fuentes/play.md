# Checklist PLAY · 10 cosas antes de subir tu app a la Play Store

Abre el proyecto de tu app en Claude Code y pega cada prompt. Claude **revisa primero y te dice qué encontró**; tú decides qué arreglar. **Nunca pegues en el chat llaves de firma, contraseñas del keystore ni tokens:** Claude los busca en el proyecto, no hace falta copiarlos. Los requisitos de Google Play cambian: confirma cada punto en la Play Console antes de enviar.

Antes de empezar, pega esto una vez:
```
Vas a revisar mi app Android antes de subirla a Google Play. Para cada punto que te pida:
1) dime si ya está bien, mal o si no aplica, con el archivo y la línea donde lo viste;
2) si está mal, explícame en una frase por qué Google la rechazaría o la frenaría;
3) propón el arreglo más pequeño, pero NO lo apliques hasta que yo diga «sí».
Si te falta un dato (si la cuenta es personal o de empresa, si la app pide registro, qué datos guarda), pregúntamelo.
```

## 1 · Cuenta de desarrollador a nombre del cliente
```
Pregúntame a nombre de quién está la cuenta de Google Play Console donde se va a publicar. Si es mía y la app es de un cliente, explícame los pasos para que el cliente cree su propia cuenta (personal o de organización) y me invite como usuario, o para transferir la app a su cuenta después.
```

## 2 · Prueba cerrada con 12 testers por 14 días
```
Si la cuenta de Play Console es personal y se creó después del 13 de noviembre de 2023, Google pide una prueba cerrada con al menos 12 testers durante 14 días seguidos antes de pasar a producción. Arma conmigo un plan: lista de 15 testers (para tener margen), mensaje de invitación, qué les pido probar cada día y cómo registrar sus comentarios.
```

## 3 · Política de privacidad con su link
```
Haz una lista de los datos que la app recoge o comparte (cuenta, correo, ubicación, fotos, analítica, anuncios, crash reports) leyendo el código y las librerías. Con eso escribe un borrador de política de privacidad en español, y dime dónde publicarla con un link fijo que no pida iniciar sesión. No es asesoría legal.
```

## 4 · Formulario de seguridad de datos
```
Con la lista de datos del punto anterior, prepárame las respuestas del formulario de Seguridad de los datos de Play Console: qué se recoge, qué se comparte, para qué, si va cifrado en tránsito y si el usuario puede pedir que se borre. Revisa también las librerías de terceros (Firebase, anuncios, analítica), porque cuentan como datos que la app recoge.
```

## 5 · Borrar la cuenta desde la app
```
Revisa si la app permite crear una cuenta. Si sí, dime si existe una opción para borrarla dentro de la app y un link web para pedir el borrado sin instalarla. Si falta, propón la forma más simple de agregar las dos y qué datos se borran o se conservan.
```

## 6 · Permisos, solo los necesarios
```
Lista todos los permisos del AndroidManifest (también los que agregan las librerías) y dime para qué se usa cada uno. Márcame los que no se usan o los sensibles (ubicación en segundo plano, SMS, llamadas, todos los archivos, accesibilidad), que Google pide justificar, y propón quitarlos o cambiarlos por una alternativa.
```

## 7 · Versión de Android al día
```
Dime qué targetSdkVersion y compileSdkVersion tiene la app. Desde el 31 de agosto de 2026, las apps nuevas y las actualizaciones deben apuntar a Android 16 (API 36). Si está abajo, dime qué cambiar y qué comportamientos nuevos de esas versiones podrían romper algo.
```

## 8 · Ícono y capturas del tamaño que piden
```
Revisa qué tengo para la ficha de Play Store: ícono de 512×512, gráfico de funciones de 1024×500, al menos 2 capturas de teléfono, descripción corta (80 caracteres) y larga. Dime qué falta y escribe la descripción corta y la larga en español a partir de lo que hace la app.
```

## 9 · Llave de subida respaldada
```
Revisa cómo se firma la app (keystore, Play App Signing) y dónde está la llave de subida. Sin mostrarme contraseñas, dime si está fuera del repositorio, si hay un respaldo en un lugar seguro del cliente y qué hacer si se pierde (reinicio de la llave de subida desde Play Console).
```

## 10 · Plan de actualizaciones (el que casi nadie hace)
```
Escribe un plan de mantenimiento para la app: cada cuánto revisar dependencias, cuándo subir el targetSdk cada año antes de la fecha límite de Google, cómo probar una actualización en la prueba interna antes de producción y quién lo hace (yo o el cliente). Que quepa en una hoja.
```
Una app que no se actualiza deja de aparecer para usuarios con celulares nuevos.

---
¿Todavía no revisas la app por dentro? Usa la [checklist APP](../app/). ¿Vas a entregarla a un cliente? Usa la [checklist ENTREGA](../entrega/).

Fuentes: Ayuda de Play Console (requisitos de prueba para cuentas personales nuevas; Seguridad de los datos; borrado de cuentas), Android Developers (requisito de nivel de API de destino, 2026). Lumière Autómata · lumiereautomata.com
