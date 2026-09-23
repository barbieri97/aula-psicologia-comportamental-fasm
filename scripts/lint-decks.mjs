#!/usr/bin/env node
// Valida as aulas contra o contrato do tema (tema/layouts.json).
//
//   npm run lint                 todas as aulas de aulas/
//   node scripts/lint-decks.mjs referencia-tema.md   um arquivo específico
//
// Existe porque o deck só quebra na tela: um campo com nome errado no
// frontmatter não é erro de sintaxe — o layout simplesmente não desenha nada, e
// você descobre no meio da aula. Aqui isso vira erro antes do build.
//
// ERRO (sai 1): layout inexistente, campo obrigatório faltando, frontmatter que
//   não parseia, slide vazio, `image` de `figura` que não começa com `/`, `vs`
//   com `left`/`right` em texto corrido em vez de { title, items }.
// AVISO (sai 0): campo desconhecido (quase sempre um typo), slide denso demais
//   para ser lido do fundo da sala, mesmo layout três vezes seguidas (exceto
//   uma série de `figura`).
import { readFileSync } from 'node:fs'
import { basename, isAbsolute, join } from 'node:path'
import { parse } from '@slidev/parser/fs'
import { deckFiles, root } from './lib.mjs'

const contrato = JSON.parse(readFileSync(join(root, 'tema', 'layouts.json'), 'utf-8'))
const LAYOUTS = contrato.layouts
const UNIVERSAIS = new Set(contrato.universais)

const MAX_BULLETS = 7
const MAX_CHARS_BULLET = 190
const SERIE_PERMITIDA = new Set(['figura'])

const vermelho = (s) => `\x1b[31m${s}\x1b[0m`
const amarelo = (s) => `\x1b[33m${s}\x1b[0m`
const verde = (s) => `\x1b[32m${s}\x1b[0m`
const fraco = (s) => `\x1b[2m${s}\x1b[0m`

// O build chama este script com caminhos absolutos; na mão se digita o relativo.
const alvos = process.argv.slice(2)
const arquivos = alvos.length ? alvos.map((a) => (isAbsolute(a) ? a : join(root, a))) : deckFiles()

let erros = 0
let avisos = 0

for (const arquivo of arquivos) {
  const nome = basename(arquivo)
  const problemas = []
  const erro = (n, msg) => { problemas.push({ nivel: 'erro', n, msg }); erros++ }
  const aviso = (n, msg) => { problemas.push({ nivel: 'aviso', n, msg }); avisos++ }

  let deck
  try {
    deck = await parse(readFileSync(arquivo, 'utf-8'), arquivo)
  } catch (err) {
    console.error(`${vermelho('✗')} ${nome}: não foi possível parsear — ${err.message}`)
    erros++
    continue
  }

  let anterior = null
  let repetidos = 0

  deck.slides.forEach((slide, i) => {
    const n = i + 1
    const fm = slide.frontmatter ?? {}
    const nomeLayout = fm.layout ?? (i === 0 ? 'lead' : 'default')
    const corpo = (slide.content ?? '').trim()

    const layout = LAYOUTS[nomeLayout]
    if (!layout) {
      erro(n, `layout "${nomeLayout}" não existe no tema (veja tema/layouts.json)`)
      return
    }

    for (const campo of layout.obrigatorios) {
      const valor = fm[campo]
      const vazio = valor === undefined || valor === null || valor === ''
        || (Array.isArray(valor) && valor.length === 0)
      if (vazio) erro(n, `layout "${nomeLayout}" exige o campo \`${campo}\``)
    }

    const conhecidos = new Set([...layout.campos, ...UNIVERSAIS])
    for (const campo of Object.keys(fm)) {
      // O headmatter do primeiro slide traz as chaves do deck inteiro (theme,
      // info, date, themeConfig…), que não são campos de layout.
      if (i === 0) break
      if (!conhecidos.has(campo)) {
        aviso(n, `campo \`${campo}\` não é usado pelo layout "${nomeLayout}" — typo?`)
      }
    }

    // `assetUrl()` só acrescenta a base do GitHub Pages a caminho que começa com
    // `/`. Um `\foto.png` (barra do Windows) ou `foto.png` passa cru: funciona no
    // `npm run dev` e dá 404 no site publicado.
    if (nomeLayout === 'figura' && typeof fm.image === 'string'
      && !fm.image.startsWith('/') && !/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(fm.image)) {
      erro(n, `\`image: ${fm.image}\` precisa começar com "/" (ex.: /foto.png) — assim quebra no site`)
    }

    // O `vs` lê `left.title` e `left.items`. Um `left: "<strong>A</strong><br>…"`
    // parseia sem erro e desenha as duas colunas vazias.
    if (nomeLayout === 'vs') {
      for (const lado of ['left', 'right']) {
        const v = fm[lado]
        if (v !== undefined && (typeof v !== 'object' || v === null || !Array.isArray(v.items))) {
          erro(n, `\`${lado}\` do "vs" precisa ser { title, items: [...] } — em texto corrido a coluna sai vazia`)
        }
      }
    }

    if (layout.corpo === 'vazio' && corpo) {
      aviso(n, `o layout "${nomeLayout}" ignora o corpo do slide, e há texto solto nele`)
    }

    if (layout.corpo === 'markdown' && !corpo && !fm.title && !fm.kicker) {
      erro(n, 'slide vazio (sem corpo e sem título) — frontmatter mal fechado?')
    }

    const bullets = corpo.split('\n').filter((l) => /^\s*([-*+]|\d+\.)\s+/.test(l))
    if (bullets.length > MAX_BULLETS) {
      aviso(n, `${bullets.length} bullets: mais do que se lê do fundo da sala (máx. ${MAX_BULLETS})`)
    }
    const longo = bullets.find((l) => l.length > MAX_CHARS_BULLET)
    if (longo) aviso(n, `bullet com ${longo.length} caracteres — vire frase curta ou quebre o slide`)

    if (nomeLayout === anterior) {
      repetidos++
      // Uma série de `figura` é o próprio argumento — o gradiente de generalização
      // se mostra passando de uma imagem à seguinte — e não repetição de forma.
      if (repetidos === 2 && !SERIE_PERMITIDA.has(nomeLayout)) {
        aviso(n, `"${nomeLayout}" três vezes seguidas — o deck fica monótono`)
      }
    } else {
      repetidos = 0
      anterior = nomeLayout
    }
  })

  const marca = problemas.some((p) => p.nivel === 'erro')
    ? vermelho('✗')
    : problemas.length ? amarelo('!') : verde('✓')

  console.log(`${marca} ${nome} ${fraco(`· ${deck.slides.length} slides`)}`)
  for (const p of problemas) {
    const etiqueta = p.nivel === 'erro' ? vermelho('erro ') : amarelo('aviso')
    console.log(`   ${etiqueta} ${fraco(`slide ${p.n}`)} ${p.msg}`)
  }
}

console.log()
if (erros) {
  console.log(vermelho(`${erros} erro(s)`) + (avisos ? `, ${avisos} aviso(s)` : ''))
  process.exit(1)
}
console.log(avisos ? amarelo(`${avisos} aviso(s)`) : verde('tudo certo'))
