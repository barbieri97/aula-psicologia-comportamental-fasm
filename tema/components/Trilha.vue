<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { usePartes } from '../lib/partes.js'

// Trilha da aula: uma barra no topo dividida nas partes do deck (os slides
// `layout: section`). A parte corrente aparece preenchida e as já vencidas
// ficam marcadas — em três horas de aula, é o "você está aqui" que a turma
// procura sem perguntar. Some sozinha num deck sem seções.
const { partes, atual } = usePartes()
const nav = useNav()

// Quanto da parte corrente já foi percorrido (0–1), para a barra andar dentro
// do segmento em vez de pular de parte em parte.
const progresso = computed(() => {
  const lista = partes.value
  const corrente = atual.value
  if (!corrente) return 0
  const i = lista.indexOf(corrente)
  const inicio = corrente.pagina
  const fim = i + 1 < lista.length ? lista[i + 1].pagina : (nav.total?.value ?? inicio) + 1
  const vao = Math.max(1, fim - inicio)
  return Math.min(1, Math.max(0, ((nav.currentPage?.value ?? inicio) - inicio) / vao))
})
</script>

<template>
  <!-- Antes da primeira seção não há o que sinalizar: a trilha só entra quando
       a aula já está dentro de uma parte. -->
  <div v-if="partes.length > 1 && atual" class="trilha" aria-hidden="true">
    <span
      v-for="parte in partes"
      :key="parte.pagina"
      class="trilha-seg"
      :class="{
        'is-feita': atual && parte.pagina < atual.pagina,
        'is-atual': atual && parte.pagina === atual.pagina,
      }"
    >
      <span
        v-if="atual && parte.pagina === atual.pagina"
        class="trilha-fill"
        :style="{ transform: `scaleX(${progresso})` }"
      />
    </span>
  </div>
</template>

<style scoped>
/* Fica no fio do topo e é discreta de propósito: quem procura, acha; quem não
   procura, não é distraído por ela no meio de uma explicação. */
.trilha {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 4px;
  height: 3px;
  padding: 0 var(--pad-x);
}

.trilha-seg {
  position: relative;
  flex: 1;
  overflow: hidden;
  border-radius: 0 0 2px 2px;
  background: color-mix(in oklab, var(--frente) 8%, transparent);
}

.trilha-seg.is-feita { background: color-mix(in oklab, var(--acento) 45%, transparent); }

.trilha-fill {
  position: absolute;
  inset: 0;
  transform-origin: left center;
  background: var(--acento);
  transition: transform 320ms var(--mov-curva);
}

@media (prefers-reduced-motion: reduce) {
  .trilha-fill { transition: none; }
}
</style>
