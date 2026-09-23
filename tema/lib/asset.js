/**
 * Resolve um caminho de asset contra a base do deck.
 *
 * Por que existe: o Vite reescreve `/foo.jpg` com a `--base` do build só quando o caminho
 * está **estático no template** — `<img src="/foo.jpg">` escrito no corpo do markdown vira
 * `/<repo>/<aula>/foo.jpg` sozinho. Quando o caminho chega em tempo de execução (prop de
 * componente, campo de frontmatter injetado com `v-html`) ele é só uma string, e o Vite não
 * a toca. Local, com base `/`, não dá diferença; no GitHub Pages, onde cada aula é servida
 * de `/<repo>/<aula>/`, o navegador pede `/foo.jpg` na raiz do domínio e leva 404 — por isso
 * o bug só aparece no site publicado.
 *
 * Quem usa: o layout `figura`, que recebe o caminho no campo `image` do frontmatter. Os demais
 * visuais são `<img>` ou `<svg>` escritos no corpo do slide, que o Vite já resolve sozinho. A
 * regra para o que vier depois: **layout ou componente novo que aceite caminho de arquivo passa
 * por `assetUrl()`** — `<img :src="assetUrl(src)">`, `url(${assetUrl(fm.image)})`.
 */
export function assetUrl (path) {
  if (typeof path !== 'string' || path === '') return path
  // URL absoluta (http:, data:, blob:) ou protocolo-relativa: já está resolvida.
  if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path
  // Caminho relativo: resolve sozinho contra a página, não mexemos.
  if (path[0] !== '/') return path
  const base = import.meta.env.BASE_URL ?? '/'
  return base.replace(/\/$/, '') + path
}
