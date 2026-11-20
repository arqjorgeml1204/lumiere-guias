// Construye las guías de regalo de Lumière Autómata para GitHub Pages: una página por palabra clave.
// Cada guía: fuentes/<slug>.md (la primera línea «# …» es el título) + su entrada en guias.json.
// Uso: node herramientas/construir.mjs   →   <slug>/index.html, <slug>/og.jpg e index.html
import {readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync} from "node:fs";
import {execFileSync} from "node:child_process";
import {join, dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {marked} from "marked";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://arqjorgeml1204.github.io/lumiere-guias";
const guias = JSON.parse(readFileSync(join(RAIZ, "guias.json"), "utf8"));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Los títulos «## 4 · …» llevan id="4" para poder mandar un link directo a ese punto.
const slugTitulo = (t) => { const n = t.match(/^(\d+)\s*·/); return n ? n[1] : t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); };
marked.use({gfm: true, renderer: {
  heading(text, nivel, crudo) { return nivel === 1 ? "" : `<h${nivel} id="${slugTitulo(crudo)}">${text}</h${nivel}>\n`; },
  code(codigo) { return `<div class="prompt"><button type="button" class="copiar">Copiar</button><pre><code>${esc(codigo)}</code></pre></div>\n`; },
  link(href, titulo, texto) { return `<a href="${href}" target="_blank" rel="noopener">${texto}</a>`; },
}});

const CSS = `:root{--bg:#0B1220;--card:#111A2C;--borde:#24314A;--ink:#E8ECF3;--suave:#9AA8BD;--acento:#F59E0B;--teal:#2DD4BF;color-scheme:dark}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font:400 17px/1.6 Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.envoltura{max-width:720px;margin:0 auto;padding:20px 16px 48px}
header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:20px}
.marca{color:var(--ink);text-decoration:none;font:400 20px/1 Anton,Impact,sans-serif;letter-spacing:.5px;text-transform:uppercase}
.marca span{color:var(--acento)}
.pastilla{font-size:13px;font-weight:700;color:#111;background:var(--acento);border-radius:999px;padding:5px 12px;letter-spacing:.3px}
h1{font:400 clamp(30px,8vw,46px)/1.05 Anton,Impact,sans-serif;text-transform:uppercase;letter-spacing:.5px;margin:4px 0 14px}
h1 em{font-style:normal;color:var(--acento)}
.intro{color:var(--suave);margin:0 0 22px}
h2{font-size:20px;line-height:1.3;margin:34px 0 10px;padding-top:6px;border-top:1px solid var(--borde)}
h3{font-size:17px;margin:22px 0 8px}
p,li{overflow-wrap:anywhere}
a{color:var(--teal)}
strong{color:#fff}
code{font:500 .9em/1.4 ui-monospace,SFMono-Regular,Consolas,monospace;background:#0A0F1A;border:1px solid var(--borde);border-radius:6px;padding:1px 6px}
.prompt{position:relative;margin:12px 0 16px}
.prompt pre{margin:0;background:#0A0F1A;border:1px solid var(--borde);border-left:4px solid var(--acento);border-radius:12px;padding:44px 14px 14px;white-space:pre-wrap;overflow-wrap:anywhere}
.prompt pre code{background:none;border:0;padding:0;font-size:14.5px;line-height:1.55;color:#DCE3EE}
.copiar{position:absolute;top:8px;right:8px;font:700 14px/1 Inter,system-ui,sans-serif;color:#111;background:var(--acento);border:0;border-radius:8px;padding:9px 14px;cursor:pointer}
.copiar.ok{background:var(--teal)}
.tabla{overflow-x:auto;margin:12px 0}
table{width:100%;border-collapse:collapse;font-size:13.5px;line-height:1.4}
th,td{border:1px solid var(--borde);padding:6px 7px;text-align:left;vertical-align:top;overflow-wrap:normal;hyphens:auto}
th{background:var(--card)}
hr{border:0;border-top:1px solid var(--borde);margin:34px 0 14px}
blockquote{margin:14px 0;padding:10px 14px;border-left:4px solid var(--teal);background:var(--card);border-radius:0 10px 10px 0}
footer{margin-top:40px;padding-top:18px;border-top:1px solid var(--borde);color:var(--suave);font-size:15px}
footer a{color:var(--ink)}
.lista{list-style:none;padding:0;margin:0}
.lista li{margin:0 0 12px}
.lista a{display:block;text-decoration:none;color:var(--ink);background:var(--card);border:1px solid var(--borde);border-radius:14px;padding:14px 16px}
.lista b{display:inline-block;color:#111;background:var(--acento);border-radius:6px;padding:1px 8px;margin-right:8px;font-size:13px}`;

const JS = `document.querySelectorAll('.copiar').forEach(function(b){b.addEventListener('click',function(){
var t=b.parentNode.querySelector('code').innerText;
function listo(){b.textContent='¡Copiado!';b.classList.add('ok');setTimeout(function(){b.textContent='Copiar';b.classList.remove('ok')},1800)}
function respaldo(){var a=document.createElement('textarea');a.value=t;a.setAttribute('readonly','');a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy');listo()}catch(e){}document.body.removeChild(a)}
if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(listo,respaldo)}else{respaldo()}})});`;

const pie = `<footer>Hecho por <a href="https://lumiereautomata.com" target="_blank" rel="noopener">Lumière Autómata</a>. Si te sirvió, sígueme en Instagram: <a href="https://www.instagram.com/lumiereautomata/" target="_blank" rel="noopener">@lumiereautomata</a>.</footer>`;
const pagina = ({titulo, descripcion, og, cuerpo, raiz}) => `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titulo)} · Lumière Autómata</title>
<meta name="description" content="${esc(descripcion)}">
<meta property="og:site_name" content="Lumière Autómata"><meta property="og:type" content="article">
<meta property="og:title" content="${esc(titulo)}"><meta property="og:description" content="${esc(descripcion)}">
${og ? `<meta property="og:image" content="${og}"><meta name="twitter:card" content="summary_large_image">` : ""}
<meta name="theme-color" content="#0B1220">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style></head>
<body><div class="envoltura">${cuerpo}${pie}</div><script>${JS}</script></body></html>
`;

const lista = [];
for (const g of guias) {
  const md = readFileSync(join(RAIZ, "fuentes", `${g.slug}.md`), "utf8").replace(/\r/g, "");
  const titulo = (md.match(/^# (.+)$/m) || [, g.slug])[1].trim();
  const dir = join(RAIZ, g.slug); mkdirSync(dir, {recursive: true});
  let og = "";
  const portada = g.portada && (/^[A-Za-z]:/.test(g.portada) ? g.portada : join(RAIZ, g.portada));
  if (portada && existsSync(portada)) {
    // Vista previa del link (1200×630): el titular de la portada del reel.
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", portada, "-vf", `scale=1080:1920,crop=1080:567:0:${g.ogY ?? 245},scale=1200:630`, "-q:v", "4", join(dir, "og.jpg")]);
    og = `${BASE}/${g.slug}/og.jpg`;
  }
  const cuerpo = `<header><a class="marca" href="../">Lumière <span>Autómata</span></a><span class="pastilla">Comentaste ${esc(g.palabra)}</span></header>
<h1>${esc(titulo)}</h1>${g.intro ? `<p class="intro">${esc(g.intro)}</p>` : ""}
<article>${marked.parse(md).replace(/<table>/g, '<div class="tabla"><table>').replace(/<\/table>/g, "</table></div>")}</article>`;
  writeFileSync(join(dir, "index.html"), pagina({titulo, descripcion: g.descripcion, og, cuerpo}));
  lista.push(`<li><a href="./${g.slug}/"><b>${esc(g.palabra)}</b>${esc(titulo)}</a></li>`);
  console.log(`${BASE}/${g.slug}/`);
}
writeFileSync(join(RAIZ, "index.html"), pagina({titulo: "Guías gratis", descripcion: "Las guías y prompts que regalo en mis reels de Instagram.", og: "",
  cuerpo: `<header><a class="marca" href="./">Lumière <span>Autómata</span></a></header><h1>Guías gratis</h1><p class="intro">Las guías y prompts que regalo en mis reels. Toca la tuya.</p><ul class="lista">${lista.join("")}</ul>`}));
