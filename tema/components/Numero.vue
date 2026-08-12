<script setup>
import { computed, onMounted, ref } from 'vue'

// Número que conta até o valor ao entrar no slide. O olho segue o movimento e
// chega no número junto com você — é o único caso em que a animação carrega
// informação (a grandeza) em vez de só decorar.
//
// Valor não numérico ("?", "n/a") é impresso como está, sem contagem.
const props = defineProps({
  valor: { type: [String, Number], required: true },
  dur: { type: Number, default: 900 },
})

// Só conta se o valor for um número inteiro — "1940" conta, "4 em 5" e "?" são
// impressos como estão. Extrair dígitos de um texto daria "45" para "4 em 5".
const alvo = computed(() => {
  const bruto = String(props.valor).trim()
  if (!/^-?\d+(\.\d+)?$/.test(bruto)) return null
  const n = Number(bruto)
  return Number.isFinite(n) ? n : null
})

const decimais = computed(() => {
  const m = /\.(\d+)$/.exec(String(props.valor))
  return m ? m[1].length : 0
})

const atual = ref(alvo.value ?? 0)

onMounted(() => {
  if (alvo.value === null) return

  const reduzido = typeof matchMedia !== 'undefined'
    && matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduzido) { atual.value = alvo.value; return }

  const inicio = performance.now()
  atual.value = 0
  const passo = (agora) => {
    const t = Math.min(1, (agora - inicio) / props.dur)
    const suave = 1 - (1 - t) ** 3            // desacelera no fim
    atual.value = alvo.value * suave
    if (t < 1) requestAnimationFrame(passo)
    else atual.value = alvo.value
  }
  requestAnimationFrame(passo)
})

const texto = computed(() => {
  if (alvo.value === null) return String(props.valor)
  return atual.value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimais.value,
    maximumFractionDigits: decimais.value,
    useGrouping: false,
  })
})
</script>

<template>
  <span class="numero">{{ texto }}</span>
</template>

<style scoped>
.numero { font-variant-numeric: tabular-nums; }
</style>
