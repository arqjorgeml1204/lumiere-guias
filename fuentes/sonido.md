# Guía SONIDO · que tu video hecho con Claude no suene a juguete

Lo que te mando por DM cuando comentas **SONIDO**. Son tres herramientas gratis que se usan juntas: una le da oídos a Claude, otra pone cada sonido en su cuadro y la tercera es de donde salen los sonidos.

## 1 · Earshot: los oídos
- **Qué hace:** escucha un audio o un video y le dice a Claude, con números, qué suena y cuándo: el volumen (LUFS), si un golpe llega tarde respecto al corte, qué falta. También trae 252 efectos hechos en código que se generan al momento.
- **Enlace:** https://github.com/Leonxlnx/earshot (licencia MIT)
- **Necesitas:** Python 3.10 o más nuevo, [uv](https://docs.astral.sh/uv/) y ffmpeg. Funciona en tu computadora, sin tarjeta de video. La primera vez baja dos modelos (~1,1 GB).
- **Instalar:**
  ```
  uv tool install "earshot[mcp] @ git+https://github.com/Leonxlnx/earshot"
  earshot doctor --fetch
  ```

## 2 · Real SFX: cada sonido en su cuadro
- **Qué hace:** revisa tu video, encuentra los momentos que piden sonido (un texto que entra, un clic, un corte) y les pone grabaciones reales en el cuadro exacto. Te devuelve el MP4 nuevo y la pista de efectos aparte. Respeta tu música y tu voz.
- **Enlace:** https://github.com/Clipwing/skills (carpeta `skills/real-sfx`, scripts MIT)
- **Necesitas:** Python 3.9 o más nuevo y ffmpeg. Trae 78 sonidos de interfaz gratis (CC0); el resto lo pones tú, por ejemplo con lo que bajes de Openverse.
- **Instalar:** copia la carpeta `skills/real-sfx` a `~/.claude/skills/real-sfx` (Windows: `%USERPROFILE%\.claude\skills\real-sfx`) y reinicia Claude Code.

## 3 · Openverse: los sonidos
- **Qué es:** un buscador de audios con licencia abierta: más de 5 millones (Wikimedia, Jamendo, Freesound).
- **Enlace:** https://openverse.org
- **Para que Claude busque y baje solo:** la skill **foley** (https://github.com/ekcheungAI/foley-skill, MIT). Busca en Openverse, se queda solo con los CC0, anota de dónde salió cada sonido, lo recorta con Earshot y lo pone en su cuadro. Instalar: copia la carpeta `foley` a `~/.claude/skills/foley`. Necesita Earshot instalado.
- **Importante:** no todos se pueden usar sin dar crédito. Filtra por **CC0** (dominio público) y no le debes crédito a nadie. Si usas uno CC BY, pon el autor en la descripción.

## El prompt para pegarle a Claude Code
```
Tengo este video: <ruta del video>. Ponle el sonido con estas tres herramientas:
1. Con la skill foley, busca en Openverse solo sonidos CC0: de 6 a 10 de cada tipo que pida el video (whoosh, golpe suave, clic, pop). Bájalos a la carpeta "sonidos" con su sources.json (autor, licencia y página de origen).
2. Con earshot rank y earshot find elige el mejor de cada tipo y su mejor recorte.
3. Con la skill real-sfx agrega esa carpeta como biblioteca, encuentra los momentos del video y coloca cada sonido en su cuadro, sin tapar la voz.
4. Revisa el resultado con earshot critique y dime qué tan a tiempo quedó cada golpe y el volumen final. Déjalo en -14 LUFS.
No me digas cómo suena algo sin la lectura de earshot que lo respalde.
```
