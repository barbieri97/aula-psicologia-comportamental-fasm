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
- **Valor com `:` ou `,` dentro de `{ }` vai entre aspas — e aspa aberta se fecha.**
  `kicker: "layout: define"`, `{ topic: "Público, privado e fictício" }`. Sem as aspas o YAML corta o
  valor no meio e o slide sai truncado, sem erro nenhum. Pior é a aspa que ficou aberta: ela engole
  as linhas seguintes do bloco até achar outra aspa, e o campo que vinha depois **desaparece em
  silêncio** — o parser não reclama, e o lint só percebe se o que sumiu era campo obrigatório. Ao
  editar um item de lista entre aspas, confira as duas pontas.

`npm run lint` cobra o resto contra [`tema/layouts.json`](tema/layouts.json).

## Como se escreve uma aula

O `docs/tema.md` manda na forma; esta seção manda no conteúdo. Ela é o destilado das revisões das
aulas 03 e 04 — o que foi corrigido depois de ver o deck projetado. A aula 04 saiu da revisão com
**67 linhas acrescentadas contra 279 removidas**: revisar aqui é, quase sempre, cortar.

### O slide é o que vai ser falado, não o roteiro de quem fala

- **Sem cronômetro.** Nada de `tempo="10 min"` no `<Momento>`, nada de `kicker: Discussão · 10 min`,
  nada de `layout: pausa` marcando o intervalo. Quanto dura é decisão de sala no dia; escrito no
  slide vira promessa que a aula não cumpre.
- **Sem ponteiro para outra parte da própria aula.** «assunto da Parte 5», «veremos um a um», «é a
  segunda condição da recuperação»: o aluno não precisa do índice e quem apresenta já sabe.
- **Sem meta-texto sobre o capítulo.** `kicker: Figura 4.3 do capítulo`, `title: O caso de
  Joãozinho, passo a passo`, `note:` que descreve o desenho logo abaixo. Linha que comenta a aula em
  vez de ensinar a matéria sai.
- **Sem gabarito.** Atividade cuja resposta vem no slide seguinte não é atividade. A resposta é da
  turma; o que fica no deck é a pergunta.

### O título é a pergunta que a turma tem de responder

`Um caso de chão de fábrica` não diz nada a ninguém; `Qual o efeito?` diz. Nos pontos de parada e
nas discussões o `title` vira pergunta — «Qual a contingência?», «Fuga ou esquiva?», «Por que a
punição é o método mais usado?». O `kicker` fica só com rótulo de navegação (`Ponto de parada · 3`,
`Parte três`, `Fontes · 1 de 2`); quando ele apenas comentaria a estrutura, **apague a linha
inteira** — `kicker:` sem valor não quebra nada, mas é lixo que ficou.

### Uma frase por ideia

O aposto depois de travessão é a primeira coisa a cair: «exigem mais trabalho — prestar atenção aos
momentos certos» virou «exigem mais trabalho prestar atenção aos momentos certos». `subtitle` e
`note` perdem o segundo período: «A consequência que reduz a frequência — e o que a separa da
extinção» virou «A consequência que reduz a frequência.» Lista de quatro itens vira de três quando o
quarto é o item meta. Projetado, período longo não é lido — é pulado.

### Os exemplos são de agora e da vida do aluno

O capítulo é de 2007 e os exemplos envelheceram junto. Vírus de site duvidoso virou golpe do Pix;
perder a mesada virou perder o celular no fim de semana; telefonar para a ex virou a partida on-line
de madrugada; o professor que vigia a turma virou o status verde do aplicativo de trabalho. Dois
critérios, nesta ordem:

- **Nada que constranja.** Apanhar, infidelidade, roupa de mulher, briga de casal: troque. O «rolar
  no chão apanhando num treino de luta» virou o molho mais ardido, pelo qual se paga mais caro —
  mesma contingência, sem a cena.
- **Público certo.** É turma de psicologia: o exemplo de sala de aula e o de sessão andam juntos.
  Rato, pombo e caixa de Skinner continuam valendo — mas como **nota do apresentador**, não como o
  exemplo do slide.

### O rigor é de conceito, não de literatura

- **`Sav` é o nome do estímulo aversivo no slide.** Chame de `Sav` o estímulo que a resposta retira
  ou evita, não de «reforçador negativo» — esse nome confunde o estímulo com a contingência.
- **Sem absolutos.** «é a primeira a ser aprendida, sempre» → «é a primeira a ser aprendida».
- **Sem disputa de literatura.** A reanálise que contradiz a meta-análise, o autor que propôs
  abandonar a distinção positivo/negativo, o levantamento sobre como os livros didáticos tratam o
  tema: é assunto de outra disciplina. O deck ensina o consenso do capítulo.
- **Dúvida sobre fonte não vira slide.** Dado sem fonte primária localizável sai do deck — nada de
  `<Callout tom="alerta">⚠︎ verificar`. O aviso vai para a conversa com o professor, não para a
  projeção.
- **O fecho é prático.** «Punição é um efeito observado, não um procedimento pretendido» virou
  «Punição só diz o que não fazer, e em contexto específico; o que ensina é o reforço». O
  `statement` fecha com o que a turma leva para a prática.

### Vídeo, retrato e slide de enfeite não entram

`layout: iframe` de YouTube não sai no PDF exportado e o canal pode bloquear a incorporação — daí o
aviso do lint quando três aparecem seguidos. Retrato de autor sem função na argumentação, SVG que
repete o que o texto ao lado já diz, `layout: metric` com o número de uma meta-análise: tudo isso foi
cortado da aula 04. **Corte primeiro; encolher é o último recurso.**

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
| Material de origem | `referencias/aula-NN/` — o capítulo e os artigos que a aula usa, com nome descritivo; não é publicado |
| Editor | `.vscode/settings.json` lista cada deck em `slidev.include`; aula nova entra ali para a extensão do Slidev reconhecê-la |
| `AGENTS.md` | cópia deste arquivo para agentes que não leem `CLAUDE.md`; ao mexer aqui, copie por cima |

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
npm run dev -- 04                            # abre a aula cujo nome contém "04"
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

Daí `src="/nome.jpg"` (raiz do `public/`, não `/aulas/public/nome.jpg`) — **e escrito no corpo do
slide.** O Vite reescreve o caminho com a `--base` do build só quando ele está estático no
template; num campo de frontmatter, que o tema injeta com `v-html`, ele é string em tempo de
execução e sai cru. Local, com base `/`, os dois funcionam; publicado sob `/<repo>/<aula>/`, o
segundo dá 404. Layout ou componente novo que aceite caminho de arquivo precisa passá-lo por
`assetUrl()` (`tema/lib/asset.js`). Detalhe em [`docs/tema.md`](docs/tema.md#figuras-imagem-e-desenho).

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
