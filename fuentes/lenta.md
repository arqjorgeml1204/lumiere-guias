# Guía LENTA · El prompt que revisa tu app antes de tocarla

Te la mando porque comentaste **LENTA**. Es lo que usé con mis apps de obra. De una lista viral de 31 mejoras de rendimiento, solo 6 cambiaron algo. Y lo supe porque **medí antes de cambiar**.

## Lo que pasó en mis apps (medido)
| App | Mejora | Antes | Después |
|---|---|---|---|
| Reporte de obra (página web) | Cargar las plantillas de Excel solo al exportar | 886 KB y 5,1 s | 553 KB y 3,6 s |
| Reporte de obra | Esperar a que termines de escribir antes de redibujar | 76 milésimas por tecla | 3,6 |
| App de estimaciones (celular) | Juntar las preguntas a la base de datos | 82 preguntas | 4, con el mismo resultado |

Lo medí con Chrome simulando un celular de gama media y una red lenta.

## EL PROMPT (cópialo tal cual en Claude, con tu proyecto abierto)
```text
Quiero que mi app sea más rápida, pero NO cambies nada todavía.

1. Primero dime qué tipo de app es (página web con servidor, página sin servidor, app de celular sin internet, etc.) y cómo carga y guarda sus datos. Si no lo puedes saber leyendo el código, pregúntame.
2. Revisa una por una estas 31 mejoras y para cada una dime: APLICA / YA ESTÁ / NO APLICA, con una línea de por qué y el archivo donde lo viste:
   skeletons de carga · imágenes WebP/AVIF · llamadas duplicadas a la API · debounce en búsquedas · paginar resultados · CDN · cola de trabajos · consultas N+1 · compresión Brotli/Gzip · caché con Redis · dependencias sin usar · timeouts en APIs externas · respuestas de IA token a token · actualizar la interfaz sin esperar al servidor · lazy loading de imágenes · peticiones en paralelo · índices en la base de datos · rastrear peticiones lentas · servidor cerca de la base de datos · renderizar en servidor o en build · scripts de terceros al final · dividir el JavaScript por página · virtualizar listas largas · pedir solo las columnas necesarias · pool de conexiones · evitar re-renders · caché de estáticos en el navegador · repartir tráfico entre instancias · fuentes propias con pocos grosores · medir con usuarios reales · probar en celulares y redes lentas
3. De las que APLICAN, mide ANTES (tiempo de carga, peso de la página, milisegundos por acción o número de consultas) en condiciones de celular de gama media y red lenta. Dame los números.
4. Ordénalas por mejora esperada contra riesgo. Descarta las que mejoran menos de 20 % o que cambian cómo funciona la app.
5. Espera mi OK. Luego aplica UNA a la vez, vuelve a medir y demuéstrame que el resultado es el mismo (mismos datos, mismos archivos exportados).

Si te falta un dato para decidir, dímelo; no lo inventes.
```

## Por qué funciona
- **Paso 1:** la mitad de la lista es para páginas con servidor. Si tu app vive en el celular, no aplica.
- **Paso 2:** muchas ya están hechas. Claude las ve en tu código y no las «arregla» otra vez.
- **Paso 3:** sin un número de antes no sabes si mejoró. Una de mis 6 candidatas (WebP) solo ahorraba 15 % y la descarté.
- **Paso 5:** una a la vez y comprobando que todo sale igual. Así nada se rompe.

## Las 31, según tu tipo de app
| Tipo de app | Las que casi siempre aplican |
|---|---|
| Página web con servidor propio | Casi todas: CDN, compresión, caché, índices, N+1, dividir JS, SSR, timeouts… |
| Página sin servidor (por ejemplo, un artefacto o un sitio estático) | Imágenes ligeras, lazy loading, dividir lo que carga, debounce, menos re-renders, scripts al final, timeouts |
| App de celular que trabaja sin internet | N+1 e índices en su base local, miniaturas ligeras, listas virtualizadas, cola de subida con reintentos, timeouts, probar sin señal |

Hecho por Lumière Autómata · @lumiereautomata
