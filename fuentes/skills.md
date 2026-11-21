# Guía SKILLS · revisa con Claude antes de publicar

Lo que te mando por DM cuando comentas **SKILLS**. Es la skill gratis **publica-con-claude**: lo que sí funcionó de las tres skills famosas de GitHub que probé en el reel, rehecho para el español. Revisa tu guion, tu caption y tus mensajes de WhatsApp con scripts que miden, no con opinión, y nunca publica nada por ti.

## 1 · Qué revisa
- **El guion de un reel:** gancho (que dure 5 segundos o menos y hable de algo que conoces), datos, cierre y cuántas cosas pides al final.
- **El caption:** primera línea, palabra clave arriba, spanglish, muletillas de IA y hashtags.
- **Un mensaje automático de WhatsApp:** si Meta te lo podría cobrar como publicidad y si trae una forma clara de darse de baja.
- **Los comentarios de un post:** los ordena en 6 grupos y te deja la respuesta lista para copiar.
- **Tu perfil:** lo califica sobre 100 y te dice qué cambiar primero.

Cada revisión termina en **PASA**, **FALLA** o **AVISO**, con el número que lo justifica, y una propuesta de arreglo que tú decides si aceptas.

## 2 · Descárgala
- **Enlace:** https://github.com/arqjorgeml1204/lumiere-skills/tree/main/publica-con-claude
- **Necesitas:** Claude Code o claude.ai. Para los scripts, Python 3 en tu computadora (en claude.ai corren solos).

## 3 · Instálala
**En Claude Code:** copia la carpeta `publica-con-claude` dentro de `~/.claude/skills/` (Windows: `%USERPROFILE%\.claude\skills\`) y reinicia Claude Code.

O pídeselo a Claude Code:
```
Instala esta skill: descarga la carpeta publica-con-claude del repo https://github.com/arqjorgeml1204/lumiere-skills y cópiala en mi carpeta de skills de Claude (~/.claude/skills/publica-con-claude). Después dime si la ves cargada.
```

**En claude.ai:** comprime la carpeta `publica-con-claude` en un `.zip` y súbela en **Configuración → Capacidades → Skills**.

## 4 · Pruébala
Revisa un caption:
```
Revisa este caption antes de publicarlo. La palabra clave es: <tu palabra clave>

<pega aquí tu caption>
```

Revisa el guion de un reel (un tramo de voz por línea, la primera es el gancho):
```
Revisa el guion de este reel antes de grabarlo:

<pega aquí tu guion>
```

Revisa un mensaje de WhatsApp:
```
Revisa este mensaje automático de WhatsApp. Lo registré en Meta como <utilidad o marketing> y sus botones son: <texto de los botones>

<pega aquí tu mensaje>
```

> Si te marca algo raro o no te funciona, mándame un DM y la mejoro.
