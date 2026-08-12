<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Rede de proteção: se o conteúdo passar da altura do slide, encolhe até caber.
// Nunca aumenta — o tamanho projetado é uma decisão do tema, não do acaso.
//
// O piso é alto de propósito (0.7). Abaixo disso o texto voltaria a ficar
// pequeno na sala, que é justamente o problema que este tema existe para
// resolver; então, em vez de encolher mais, ele avisa no console para o slide
// ser dividido. Um `data-transborda` fica no DOM para o lint/QA enxergar.
const PISO = 0.7

const fora = ref(null)
const dentro = ref(null)
const escala = ref(1)
const transborda = ref(false)
let observador
let avisou = false

function ajustar () {
  if (!fora.value || !dentro.value) return
  const disponivel = fora.value.clientHeight
  const necessario = dentro.value.scrollHeight
  if (!disponivel || !necessario) return // slide ainda não medido (inativo / 0×0)

  const ideal = disponivel / necessario
  escala.value = necessario > disponivel + 1 ? Math.max(PISO, ideal) : 1
  transborda.value = ideal < PISO

  if (transborda.value && !avisou) {
    avisou = true
    console.warn(
      `[quadro] slide com ${Math.round(necessario)}px de conteúdo num quadro de ` +
      `${Math.round(disponivel)}px: nem no menor tamanho legível cabe. Divida o slide.`,
    )
  }
}

onMounted(() => {
  ajustar()
  observador = new ResizeObserver(ajustar)
  observador.observe(fora.value)
  observador.observe(dentro.value)
  requestAnimationFrame(ajustar)
  // As webfonts entram depois do mount e remexem a altura do texto.
  if (typeof document !== 'undefined' && document.fonts) document.fonts.ready.then(ajustar)
})

onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <!-- Ao encolher, o conteúdo cresce a partir do topo: a origem do transform é
       o topo, então centralizar aqui faria o bloco vazar para cima. -->
  <div
    ref="fora"
    class="ajuste"
    :data-transborda="transborda || null"
    :style="{ justifyContent: escala < 1 ? 'flex-start' : null }"
  >
    <div ref="dentro" class="ajuste-inner" :style="{ transform: `scale(${escala})` }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ajuste {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 0;
}

.ajuste-inner {
  transform-origin: top center;
  transition: transform 120ms ease-out;
}
</style>
