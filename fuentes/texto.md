# 3 animaciones de texto para tu video con Claude y Remotion

Remotion es una herramienta gratuita para hacer videos con código. Claude escribe la animación; tú solo copias y pegas.

## Primero, pídele esto a Claude
```text
Vamos a hacer animaciones de texto para un video vertical de 1080 × 1920 a 30 cuadros por segundo con Remotion (React).
```

## 1 · Palabra por palabra
```text
Haz que una frase de 3 a 7 palabras entre palabra por palabra: cada palabra aparece con fundido, un poco de desenfoque y sube 20 px en 5 cuadros, y la siguiente arranca 2 cuadros después. La palabra clave va en otro color.
```

## 2 · Tecleo con cursor
```text
Haz que un texto se teclee carácter por carácter, sin fundido, a 18 letras por segundo, en letra monoespaciada, con un cursor de bloque de color que parpadea cada 8 cuadros al terminar.
```

## 3 · Golpe invertido
```text
Haz una transición de golpe en 9 cuadros: la tarjeta crece 1,6 veces en 2 cuadros con 10 px de desenfoque, 1 cuadro de destello blanco, 5 cuadros con los colores invertidos y luego vuelve a la normalidad. Nunca más de 3 destellos por segundo.
```
El golpe resérvalo para un cambio importante. Los destellos rápidos pueden provocar crisis en personas con epilepsia fotosensible; por eso nunca más de 3 por segundo.

---
**Si algo no sale igual:** pídele «hazlo más lento» y que te muestre un cuadro fijo. Un cuadro es cada imagen del video: a 30 cuadros por segundo, 5 cuadros son unos 0,17 segundos.
