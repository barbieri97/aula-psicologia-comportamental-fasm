import { defineMermaidSetup } from '@slidev/types'

// O Slidev renderiza Mermaid dentro de um ShadowRoot: o CSS do tema não alcança
// o SVG. A alavanca suportada são os `themeVariables` do próprio Mermaid, então
// os valores são lidos dos MESMOS tokens que o resto do tema usa — um diagrama
// acompanha a paleta sem configuração por slide.
//
// As variáveis CSS voltam como a expressão crua (`color-mix(...)`, `oklch(...)`),
// que a biblioteca de cor do Mermaid não sabe manipular. Por isso cada valor é
// resolvido antes numa sonda invisível: o `color` computado é sempre `rgb()`.
export default defineMermaidSetup(() => {
  if (typeof document === 'undefined') return { theme: 'base' }

  const raiz = document.documentElement
  const sonda = document.createElement('span')
  sonda.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none'
  raiz.appendChild(sonda)

  const cor = (expr: string, reserva: string) => {
    sonda.style.color = ''
    sonda.style.color = expr
    const c = getComputedStyle(sonda).color
    return c && c !== 'rgba(0, 0, 0, 0)' ? c : reserva
  }
  const v = (nome: string, reserva: string) => cor(`var(${nome})`, reserva)

  const papel = v('--papel', '#fbf8f2')
  const cartao = v('--cartao', '#ffffff')
  const tinta = v('--tinta', '#16202f')
  const tinta2 = v('--tinta-2', '#47536a')
  const linha = v('--linha-forte', '#cec7b4')
  const acento = v('--acento', '#b23a1b')
  const fonte = getComputedStyle(raiz).getPropertyValue('--fonte-corpo').trim() || 'inherit'

  raiz.removeChild(sonda)

  return {
    theme: 'base',
    themeVariables: {
      darkMode: false,
      fontFamily: fonte,
      fontSize: '18px',
      background: papel,
      mainBkg: cartao,
      primaryColor: cartao,
      primaryBorderColor: acento,
      primaryTextColor: tinta,
      secondaryColor: papel,
      secondaryBorderColor: linha,
      secondaryTextColor: tinta,
      tertiaryColor: papel,
      tertiaryBorderColor: linha,
      tertiaryTextColor: tinta,
      lineColor: tinta2,
      textColor: tinta,
      titleColor: tinta,
      nodeBorder: acento,
      nodeTextColor: tinta,
      edgeLabelBackground: papel,
      clusterBkg: papel,
      clusterBorder: linha,
      defaultLinkColor: tinta2,
      // sequência
      actorBkg: cartao,
      actorBorder: acento,
      actorTextColor: tinta,
      actorLineColor: linha,
      signalColor: tinta2,
      signalTextColor: tinta,
      noteBkgColor: cor('color-mix(in oklab, #b23a1b 12%, #ffffff)', cartao),
      noteTextColor: tinta,
      noteBorderColor: acento,
    },
  }
})
