<script setup>
import { computed } from 'vue'

// O aparte do slide: a frase que você quer que fique quando o resto sair da
// tela. Quatro tons, cada um com uma cor e um papel:
//   nota (padrão) · alerta (cuidado, erro comum) · bom (o que se sustenta) · ruim (o que não)
//
//   <Callout tom="alerta" icon="lucide:triangle-alert">texto <strong>com HTML</strong></Callout>
const TONS = {
  nota: { cor: 'var(--azul)', icone: 'lucide:info' },
  alerta: { cor: 'var(--ambar)', icone: 'lucide:triangle-alert' },
  bom: { cor: 'var(--verde)', icone: 'lucide:check' },
  ruim: { cor: 'var(--vermelho)', icone: 'lucide:circle-x' },
}

const props = defineProps({
  tom: { type: String, default: 'nota' },
  icon: { type: String, default: '' },     // sobrescreve o ícone do tom
})

const cfg = computed(() => TONS[props.tom] ?? TONS.nota)
</script>

<template>
  <aside class="callout entra" :style="{ '--cor': cfg.cor }">
    <Icon :name="icon || cfg.icone" class="callout-icone" />
    <div class="callout-corpo"><slot /></div>
  </aside>
</template>

<style scoped>
.callout {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.8rem 1.1rem;
  border-radius: var(--raio);
  background: color-mix(in oklab, var(--cor) 8%, var(--superficie));
  border: 1px solid color-mix(in oklab, var(--cor) 26%, transparent);
  border-left: 4px solid var(--cor);
  font-size: var(--t-corpo);
  line-height: 1.4;
}

.callout-icone {
  font-size: 1.5rem;
  margin-top: 0.1em;
  color: var(--cor);
}

.callout-corpo :deep(strong) { font-weight: 700; }
.callout-corpo :deep(em) { font-style: italic; color: var(--cor); }
.callout-corpo :deep(p) { margin: 0; }
.callout-corpo :deep(p + p) { margin-top: 0.4rem; }
</style>
