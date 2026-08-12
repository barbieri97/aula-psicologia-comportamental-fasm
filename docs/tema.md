# quadro — contrato de autoria

O tema desta disciplina. Mora em [`tema/`](../tema), na raiz do repositório, e é referenciado
pelos decks como `theme: ../tema` (a partir de `aulas/`) ou `theme: ./tema` (a partir da raiz).

Ele foi escrito para uma condição específica: **uma aula de três horas, projetada numa sala, lida
do fundo dela.** Todas as decisões abaixo saem daí.

Para ver em vez de ler: `npm run ref` abre [`referencia-tema.md`](../referencia-tema.md), com um
slide por layout e por componente.

---

## As três regras

1. **Escolha o `layout:` que tem a forma do conteúdo e preencha o frontmatter dele.** Definição →
   `define`. Oposição → `vs`. Processo → `steps`. Número → `metric`. Estrutura → `diagram`.
2. **Nada de CSS, `<style>`, grid ou HTML de layout dentro do `.md`.** Se você está precisando de
   uma `div`, o layout escolhido é o errado. (HTML de *texto* — `<strong>`, `<em>`, `<code>`,
   `<span class="destaque">` — é bem-vindo, inclusive dentro dos campos de frontmatter.)
3. **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo você vê
   duas linhas `---` seguidas: está certo. Compartilhar um `---` entre dois blocos quebra o parse
   do arquivo inteiro.

`npm run lint` cobra as três: layout inexistente, campo obrigatório faltando, frontmatter que não
parseia e slide vazio são **erro**; campo com nome errado, slide denso demais e o mesmo layout três
vezes seguidas são **aviso**. O contrato que ele lê é [`tema/layouts.json`](../tema/layouts.json).

---

## Bloco de abertura

O primeiro bloco `---` é headmatter **e** frontmatter do primeiro slide ao mesmo tempo. Não repita
`title:` nele.

```yaml
---
theme: ../tema
title: "Aula 02 · Seleção pelas consequências"
info: Uma linha de ementa — alimenta a landing do site
date: "2026-08-18"                    # YYYY-MM-DD, também para a landing
author: FASM · Psicologia Comportamental
transition: slide-left
layout: lead
index: "02"
kicker: Psicologia Comportamental · FASM
subtitle: "A leitura da semana e o que a aula pretende responder."
---
```

---

## Layouts

`*` = campo obrigatório. **Corpo** = o markdown depois do frontmatter.

### Aberturas e fechos (fundo escuro)

| layout | para | campos | corpo |
|---|---|---|---|
| `lead` | abertura da aula | `index`, `kicker`, `title`*, `subtitle`, `author`, `date` | — |
| `section` | divisor de parte | `index`, `kicker`, `title`*, `subtitle` | — |
| `statement` | uma frase, a tela inteira | `kicker`, `title`* | opcional |
| `quote` | citação de fonte primária | `quote`*, `author`, `kicker` | — |
| `pausa` | intervalo, com contagem regressiva | `kicker`, `title`, `tempo`, `note` | opcional |
| `end` | fechamento | `title`*, `subtitle`, `contact` | — |

`section` faz mais do que anunciar: é dele que saem a **trilha** no topo dos slides e o nome da
parte no rodapé. Marque de três a seis partes numa aula longa.

### Conteúdo (fundo papel)

| layout | para | campos | corpo |
|---|---|---|---|
| `default` | uso geral | `kicker`, `title`, `ghost` | markdown |
| `define` | termo + definição | `kicker`, `term`*, `definition`, `points[]` | opcional |
| `agenda` | o caminho da aula | `kicker`, `title`, `items`*`[{topic, desc}]` | — |
| `steps` | um processo, na ordem | `kicker`, `title`, `ghost`, `steps`*`[{title, desc, icon}]` | — |
| `panels` | 2–3 subtemas em cartões | `kicker`, `title`, `panels`*`[{icon, title, items[]}]` | opcional |
| `columns` | 2–3 listas paralelas | `kicker`, `title`, `columns`*`[{title, items[]}]` | opcional |
| `vs` | A contra B | `kicker`, `title`, `label`, `left`*, `right`* | — |
| `timeline` | sequência datada | `kicker`, `title`, `events`*`[{date, title, desc}]` | — |
| `metric` | um número grande | `kicker`, `value`*, `unit`, `label`, `ghost` | — |
| `diagram` | Mermaid, figura, esquema | `kicker`, `title`, `note` | o desenho |

Campos universais: `foot` (troca o nome do deck no rodapé), `ghost` (glifo gigante ao fundo) e o que
o próprio Slidev define (`transition`, `clicks`, `hide`, `src`…).

---

## Componentes

Compõem-se no corpo de `default`, `define`, `panels`, `columns`, `statement` e `pausa`.

```html
<Callout tom="alerta" icon="lucide:triangle-alert">
  O aparte do slide. <strong>tom</strong>: nota (padrão) · alerta · bom · ruim.
</Callout>

<Tabela
  :dados="[['Ciência', 'Agente oculto'], ['Química', 'flogisto']]"
  cabecalho
  realce="linha:2"   <!-- ou coluna:N; conta a partir de 1, incluindo o cabeçalho -->
  compacta           <!-- opcional: para tabelas de cinco colunas -->
/>

<Circular
  observacao="Come vegetais"
  ficcao="Acredita no vegetarianismo"
  inferencia="inferimos que…"
  explicacao="…e come por isso"
  nota="O fecho, opcional, sob o laço."
/>

<Momento tipo="atividade" tempo="12 min" titulo="Ache o agente oculto">
  Bloco de ritmo da aula. **tipo**: atividade · discussao · pausa · sintese.
  A etiqueta de tempo é um cronômetro — clicar inicia a contagem.
</Momento>

<Cronometro tempo="15 min" tamanho="grande" />   <!-- chip (padrão) | grande -->

<Icon name="lucide:telescope" />                 <!-- qualquer ícone lucide -->
```

Do Slidev, o que mais se usa numa aula: `<v-clicks>…</v-clicks>` em volta de uma lista para revelar
item a item, e `<v-click>` num elemento só.

---

## Figuras: imagem e desenho

O lugar de um visual é o corpo de um slide `diagram` — é para isso que ele existe ("o corpo é o
desenho"). Três formas, em ordem de preferência:

| forma | quando | como |
|---|---|---|
| **SVG inline** | esquemas e gráficos que você controla | escreva o `<svg>` direto no corpo |
| **Mermaid** | fluxos e grafos simples | bloco ```` ```mermaid ```` |
| **`<img>`** | fotos e material digitalizado | arquivo em `aulas/public/`, `src="/nome.jpg"` |

Nenhuma delas pede CSS no `.md`: `.diag-palco svg` estica o desenho até a largura do palco com teto
de 19rem, e a regra `.quadro img` (em `tema/styles/base.css`) limita a imagem à mesma altura. Sem
essa regra uma foto de 1600px entraria no tamanho natural, atravessaria a borda **e** encolheria o
slide inteiro, porque o `<Ajuste>` mede a altura do conteúdo.

Três armadilhas que custaram tempo e não precisam ser redescobertas:

- **Em SVG, tamanho de fonte vai em `style`, nunca como atributo.** `<text font-size="20">` é um
  *atributo de apresentação*: ele perde para o CSS que o tema faz cascatear até dentro do SVG, e o
  texto sai gigante sobre um desenho de geometria correta — o `viewBox` escala os `<rect>`, não a
  fonte. Escreva `<text style="font-family:var(--fonte-corpo);font-size:20px">`. Tokens do tema
  funcionam dentro do SVG, então o desenho acompanha a paleta sozinho.
- **Projete o `viewBox` em torno de 3,2:1** (`0 0 960 300`). É a proporção que preenche o palco sem
  bater no teto de 19rem; mais alto que isso, o SVG é centralizado com faixas vazias dos lados.
- **Mermaid renderiza num ShadowRoot.** O `max-height` do tema não o alcança, ele desenha no tamanho
  natural e o `<Ajuste>` mede alturas diferentes a cada carga — um slide Mermaid oscila entre ×1 e
  ×0,88 sem que nada tenha mudado. Para um desenho cuja altura importa, prefira SVG inline.

---

## Tipografia e o `<Ajuste>`

O tema fixa o tamanho do texto em `tema/styles/tokens.css`. O corpo é 1,35rem (≈22px no quadro de
980px do Slidev) e **texto solto tem o mesmo tamanho do texto dentro dos componentes** — não existe
"segundo nível" pequeno. O menor texto do tema é o rodapé, em 0,95rem.

Se o conteúdo de um slide passar da altura, o componente `<Ajuste>` encolhe o bloco todo até o
piso de 0,7 e, se nem assim couber, avisa no console:

```
[quadro] slide com 512px de conteúdo num quadro de 337px: nem no menor tamanho legível cabe.
```

Isso é uma rede de proteção, não uma licença: **slide que encolhe é slide que tem conteúdo demais.**
A régua para medir o deck inteiro está em "Como medir", abaixo.

---

## Cores

Tudo sai de `tema/styles/tokens.css`. Para mudar a cara do tema inteiro, mexa lá — e só lá.

| token | é |
|---|---|
| `--papel` / `--tinta` | o fundo claro e a tinta escura; nos slides invertidos trocam de papel |
| `--acento` | giz vermelho (`#b23a1b`) — kicker, filete, realce, marcadores |
| `--marca` | o amarelo do `<span class="destaque">` |
| `--verde` `--azul` `--ambar` `--vermelho` | os tons de sentido dos `<Callout>` e `<Momento>` |
| `--t-*` | a escala de tamanhos |
| `--mov-dur` `--mov-curva` `--mov-passo` | a duração, a curva e o intervalo da cascata de entrada |

Slides invertidos não repetem paleta: o seletor `.quadro[data-tom='escuro']` redefine os mesmos
tokens, e componentes e layouts continuam lendo `--fundo`/`--frente` sem saber em qual modo estão.

---

## Movimento

Duas ideias, e só duas — descritas em `tema/styles/movimento.css`:

- **entrada em cascata**: ao chegar no slide, o conteúdo sobe e aparece na ordem de leitura;
- **traço**: filetes, conectores e linhas do tempo são *desenhados*, não simplesmente exibidos.

Some tudo em `prefers-reduced-motion` e na impressão/export. Nenhuma aula precisa pedir nada: quem
escreve o `.md` não anota animação.

---

## Como medir (em vez de chutar)

Ao mexer em tamanho, espaçamento ou densidade, meça o deck antes e depois — o `<Ajuste>` faz um
slide cheio de texto grande sair **menor** na tela, e a única forma de ver isso é medindo.

Com `npm run dev` aberto, a escala aplicada em cada slide está em `.ajuste-inner`
(`getComputedStyle(el).transform`). Um slide saudável está em `×1`; a meta é que nenhum fique
abaixo de `×0,9`.

Para medir o **deck inteiro de uma vez**, a rota `/export/` renderiza todos os slides no mesmo DOM,
e um Chrome headless resolve sem instalar nada:

```bash
node node_modules/@slidev/cli/bin/slidev.mjs aulas/aula-NN-<slug>.md --port 3099
chrome --headless=new --virtual-time-budget=40000 --dump-dom http://localhost:3099/export/ > dom.html
```

Depois é procurar `transform: scale(...)` em `.ajuste-inner` e o atributo `data-transborda`, que o
`<Ajuste>` deixa no DOM justamente para esse tipo de conferência. Duas ressalvas: rode **duas
vezes** antes de acreditar num slide Mermaid (veja "Figuras"), e lembre que o `--dump-dom` não
serializa ShadowRoot — para ver se um Mermaid desenhou mesmo, use `--screenshot`.

---

## Estrutura do tema

```
tema/
  package.json        colorSchema e highlighter
  layouts.json        o contrato que o npm run lint valida
  layouts/*.vue       um arquivo por layout
  components/*.vue    Moldura, Ajuste, Trilha, Callout, Tabela, Circular, Momento, Cronometro, Numero, Icon
  lib/partes.js       deduz as partes da aula a partir dos slides `section`
  setup/mermaid.ts    recolore o Mermaid com os tokens do tema
  styles/             tokens.css · base.css · movimento.css
```

Duas armadilhas registradas no código, para não serem redescobertas:

- **Nomes de prop da `Moldura`.** O Slidev entrega o frontmatter inteiro como props do layout, e o
  que o layout não declara desce como atributo até a `Moldura`. Se o nome bater com uma prop dela,
  ela é preenchida sozinha — era o que fazia o kicker aparecer duas vezes. Por isso a prop se chama
  `etiqueta`, e não `kicker`.
- **`.slidev-layout` não é usada.** É a classe dos layouts nativos do Slidev, e com ela vem
  `layouts-base.css`, que tem opinião própria sobre tamanho de texto (1,1rem) e marcador de lista.
  Como este tema substitui todos os layouts, ele pendura tudo em `.quadro`.
