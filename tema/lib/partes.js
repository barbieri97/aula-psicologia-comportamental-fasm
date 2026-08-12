import { computed } from 'vue'
import { useNav } from '@slidev/client'

/**
 * As partes da aula, lidas dos próprios slides `layout: section`.
 *
 * Numa aula de três horas a turma se perde: "em que pedaço estamos?". Em vez de
 * pedir que cada slide repita a que parte pertence, o tema varre a lista de
 * slides, acha os divisores de seção e deduz a parte corrente pelo número da
 * página. Escrever `layout: section` já basta — a trilha e o rodapé se viram.
 *
 * Defensivo de propósito: `meta.slide.frontmatter` é interno do Slidev, e um
 * deck sem nenhuma seção (ou uma versão que mude esse campo) apenas fica sem
 * trilha, em vez de quebrar o slide.
 */
export function usePartes () {
  const nav = useNav()

  const partes = computed(() => {
    const slides = nav.slides?.value ?? []
    const out = []
    for (const s of slides) {
      const fm = s?.meta?.slide?.frontmatter ?? {}
      if (fm.layout === 'section') {
        out.push({
          pagina: s.no,
          index: fm.index ?? String(out.length + 1).padStart(2, '0'),
          titulo: fm.title ?? '',
        })
      }
    }
    return out
  })

  const atual = computed(() => {
    const pagina = nav.currentPage?.value ?? 0
    let corrente = null
    for (const parte of partes.value) {
      if (parte.pagina <= pagina) corrente = parte
    }
    return corrente
  })

  return { partes, atual }
}
