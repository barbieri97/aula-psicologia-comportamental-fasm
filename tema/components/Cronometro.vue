<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'

// Contagem regressiva para o tempo de uma atividade ou de um intervalo.
//
//   <Cronometro tempo="15 min" tamanho="grande" />
//
// Clicar inicia; clicar de novo pausa; no fim, pisca e o clique seguinte
// devolve ao estado inicial. Enquanto ninguém clica, é só uma etiqueta com o
// tempo previsto — nada roda sozinho, e a exportação continua estática.
const props = defineProps({
  tempo: { type: String, default: '' },            // "12 min" — o número é o que conta
  tamanho: { type: String, default: 'chip' },      // chip | grande
})

const minutos = computed(() => {
  const m = /(\d+)/.exec(props.tempo)
  return m ? Number(m[1]) : 0
})

const restante = ref(null)   // segundos; null = ainda não iniciado
const rodando = ref(false)
let intervalo = null

const mostrador = computed(() => {
  if (restante.value === null) return props.tempo || '—'
  const s = Math.max(0, restante.value)
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
})

const fracao = computed(() => {
  if (restante.value === null || !minutos.value) return 0
  return 1 - Math.max(0, restante.value) / (minutos.value * 60)
})

const acabou = computed(() => restante.value !== null && restante.value <= 0)

function parar () {
  clearInterval(intervalo)
  intervalo = null
  rodando.value = false
}

function alternar () {
  if (!minutos.value) return
  if (acabou.value) { restante.value = null; return }
  if (rodando.value) { parar(); return }

  if (restante.value === null) restante.value = minutos.value * 60
  rodando.value = true
  intervalo = setInterval(() => {
    restante.value -= 1
    if (restante.value <= 0) parar()
  }, 1000)
}

onBeforeUnmount(parar)
</script>

<template>
  <button
    class="cron"
    :class="[`is-${tamanho}`, { 'is-rodando': rodando, 'is-fim': acabou }]"
    :disabled="!minutos"
    :title="minutos ? 'clique para iniciar ou pausar' : ''"
    @click="alternar"
  >
    <span class="cron-fill" :style="{ transform: `scaleX(${fracao})` }" />
    <Icon v-if="minutos" :name="rodando ? 'lucide:pause' : 'lucide:play'" class="cron-icone" />
    <span class="cron-txt">{{ mostrador }}</span>
  </button>
</template>

<style scoped>
.cron {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  border-radius: 999px;
  border: 1px solid color-mix(in oklab, var(--cor, var(--acento)) 40%, transparent);
  background: color-mix(in oklab, var(--cor, var(--acento)) 12%, transparent);
  color: var(--cor, var(--acento));
  font-family: var(--fonte-mono);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  white-space: nowrap;
}

.cron:disabled { cursor: default; }

.is-chip {
  padding: 0.25em 0.8em;
  font-size: var(--t-meta);
}

.is-grande {
  padding: 0.3em 0.9em;
  font-size: 5.5rem;
  gap: 0.25em;
  border-width: 3px;
}

.cron-fill {
  position: absolute;
  inset: 0;
  transform-origin: left center;
  background: color-mix(in oklab, var(--cor, var(--acento)) 22%, transparent);
  transition: transform 1s linear;
}

.cron-icone,
.cron-txt { position: relative; }

.cron-icone { font-size: 0.75em; opacity: 0.7; }
.is-grande .cron-icone { font-size: 0.34em; }

.cron.is-fim {
  background: var(--cor, var(--acento));
  color: var(--fundo);
  animation: q-pisca 1s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .cron-fill { transition: none; }
  .cron.is-fim { animation: none; }
}
</style>
