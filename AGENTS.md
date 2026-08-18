# Aulas — Psicologia Comportamental (FASM)

Um repositório de decks [Slidev](https://sli.dev/) com o tema **quadro**, que mora aqui mesmo em
[`tema/`](tema/) — escrito para esta disciplina, não instalado de fora. **Uma aula por arquivo
`.md`**, publicadas no GitHub Pages, cada uma na sua própria URL.

## Antes de escrever ou editar qualquer deck

**Leia [`docs/tema.md`](docs/tema.md).** É o contrato do tema: a lista de layouts, os campos de
cada um, os componentes e as regras de autoria. Sem ele você escreve markdown que o tema ignora.

Para ver os layouts renderizados em vez de lidos, `npm run ref` abre
[`referencia-tema.md`](referencia-tema.md) — um deck de bancada na raiz com um slide por layout e
por componente. Fica **fora** de `aulas/`, então o build nunca o publica.

As três regras que mais quebram deck:

- **Nada de CSS, `<style>`, grid ou HTML de layout.** Escolha o `layout:` que casa com a forma do
  conteúdo e preencha o frontmatter dele. O tema desenha o resto. (HTML de texto — `<strong>`,
  `<em>`, `<code>`, `<span class="destaque">` — é bem-vindo, inclusive no frontmatter.)
- **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo você vê
  duas linhas `---` seguidas — isso está certo. Compartilhar um `---` entre dois blocos quebra o
  parse do arquivo inteiro.
- **Valor com `:` ou `,` dentro de `{ }` vai entre aspas.** `kicker: "layout: define"`,
  `{ topic: "Público, privado e fictício" }`. Sem as aspas o YAML corta o valor no meio e o slide
  sai truncado — sem erro nenhum.

`npm run lint` cobra tudo isso contra [`tema/layouts.json`](tema/layouts.json).

## Convenções

| | |
|---|---|
| Decks | `aulas/aula-NN-slug-descritivo.md` |
| URL | o nome do arquivo (sem `.md`) vira o caminho: `/<repo>/aula-NN-slug-descritivo/` |
| Tema | `theme: ../tema` no headmatter (caminho relativo ao `.md`) |
| Idioma | conteúdo em português |
| Imagens | `aulas/public/` — **não** na raiz do repo (veja "Por que `aulas/public/`" abaixo) |
| Headmatter | além de `theme`/`title`, cada aula traz `info:` (ementa de uma linha) e `date:` (`YYYY-MM-DD`) — os dois alimentam a landing page |
| Identidade do curso | `site.config.json` na raiz (`title`, `institution`, `description`, `intro`) — o único lugar com o nome da disciplina; nada de texto de identidade chumbado nos scripts |

O bloco de abertura de um deck é headmatter **e** frontmatter do primeiro slide ao mesmo tempo.
Não repita `title:` nele.

## O tema é para a sala, não para a tela de perto

`quadro` existe porque o tema anterior era desenhado para leitura próxima: projetado numa sala, o
segundo nível de texto sumia no fundo. Aqui **o texto solto do markdown tem o mesmo tamanho do
texto dentro dos componentes** (1,35rem ≈ 22px no quadro de 980px do Slidev), e nada além do rodapé
fica abaixo de 1rem.

O componente `<Ajuste>` encolhe o conteúdo de um slide que não couber, até o piso de 0,7 — é rede
de proteção, não licença: **slide que encolhe é slide com conteúdo demais.** Ele avisa no console
quando nem no piso cabe.

Ao mexer em tamanho ou espaçamento, **meça em vez de chutar**: com `npm run dev` aberto, a escala
de cada slide está no `transform` de `.ajuste-inner`. A meta é `×1`, e nunca abaixo de `×0,9`. Foi
assim que a aula 01 saiu de 29 slides encolhidos para 4.

## Comandos

```bash
npm run dev                                  # abre a primeira aula de aulas/ com hot reload
npm run dev -- 03                            # abre a aula cujo nome contém "03"
npm run ref                                  # abre o catálogo de layouts/componentes (raiz)
npm run lint                                 # valida os decks contra o contrato do tema
npm run build                                # builda tudo em dist/ (roda o lint antes)
```

Para adicionar uma aula nova: crie o `.md` em `aulas/`, commit, push. O workflow builda e publica —
nenhuma config precisa ser tocada.

## Por que `aulas/public/`

O Slidev define `userRoot = dirname(<arquivo do deck>)` e roda o Vite com `root: userRoot` e
`publicDir: <userRoot>/public`. Ou seja: `public/`, `components/`, `layouts/`, `setup/` e `styles/`
**seus** são procurados dentro da pasta do deck, não na raiz do repo.

O tema é a exceção, e é por isso que ele pode ficar na raiz: um `theme:` que começa com `.` é
resolvido como caminho relativo ao próprio `.md` (`theme: ../tema` a partir de `aulas/`), e a raiz
do tema entra no `server.fs.allow` do Vite junto com a raiz do workspace. Layouts, componentes,
`setup/` e `styles/` do tema são varridos a partir dela.

## Build e deploy

`scripts/build-site.mjs` roda um `slidev build` **por aula** (cada uma precisa do seu próprio
`--base`, que é único por invocação do CLI), com `--router-mode hash` — o modo que o Slidev
documenta para deploy em subdiretório como o GitHub Pages. Depois gera a landing `dist/index.html`
lendo o headmatter de cada deck.

A publicação é pelo **artefato do Actions**: o job `build` empacota o `dist/` com
`upload-pages-artifact` e o job `deploy` o entrega ao Pages com `deploy-pages` (OIDC — daí
`pages: write` + `id-token: write` e o `environment: github-pages`). Exige **Settings → Pages →
Source: `GitHub Actions`**; com a fonte em `Deploy from a branch` o `configure-pages` falha.
Detalhes no README.

`scripts/lib.mjs` concentra o que os scripts compartilham: onde ficam as aulas (`deckFiles()`), como
achar binários de `node_modules` sem npx (`binOf()`) e como ler o `site.config.json` (`siteConfig()`).
`scripts/lint-decks.mjs` é o linter do tema, e o build o roda antes de gastar um `slidev build` por
aula. Nenhum script tem nome de arquivo de aula fixo — `npm run dev` descobre a primeira aula sozinho.

O `--base` vem da env `SITE_BASE` (`/` local; no CI, o output `base_path` do `configure-pages`, que
é o caminho da URL real do site). **O nome do repositório no GitHub faz parte das URLs** — renomear
o repo muda todos os links e exige rodar o workflow de novo.
