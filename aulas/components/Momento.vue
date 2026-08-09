<script setup>
// Marca o ritmo de uma aula longa: atividade em dupla, discussão aberta,
// pausa e síntese. Numa aula de 3h esses blocos precisam ser visíveis na tela,
// não só nas notas do professor.
//   <Momento tipo="atividade" tempo="10 min" titulo="Ache o agente oculto">…</Momento>
import { computed } from 'vue'

const TIPOS = {
  atividade: { icon: 'lucide:users', tone: 'var(--accent)', rotulo: 'Em duplas' },
  discussao: { icon: 'lucide:message-circle', tone: 'var(--info)', rotulo: 'Discussão' },
  pausa: { icon: 'lucide:coffee', tone: 'var(--good)', rotulo: 'Intervalo' },
  sintese: { icon: 'lucide:check-check', tone: 'var(--warn)', rotulo: 'Fechamento' },
}

const props = defineProps({
  tipo: { type: String, default: 'atividade' },   // atividade | discussao | pausa | sintese
  tempo: { type: String, default: '' },
  titulo: { type: String, default: '' },
  rotulo: { type: String, default: '' },          // sobrescreve o rótulo do tipo
})

const cfg = computed(() => TIPOS[props.tipo] || TIPOS.atividade)
</script>

<template>
  <div class="mom" :style="{ '--tone': cfg.tone }">
    <div class="mom-head">
      <Icon :name="cfg.icon" class="mom-icon" />
      <span class="mom-rotulo">{{ rotulo || cfg.rotulo }}</span>
      <span v-if="titulo" class="mom-titulo" v-html="titulo" />
      <span v-if="tempo" class="mom-tempo">{{ tempo }}</span>
    </div>
    <div class="mom-corpo"><slot /></div>
  </div>
</template>

<style scoped>
.mom {
  padding: var(--sp-3) var(--sp-4);
  border-radius: var(--radius);
  background: var(--surface-bg);
  border: var(--surface-border);
  border-left: 3px solid var(--tone);
}

.mom-head {
  display: flex; align-items: baseline; flex-wrap: wrap;
  gap: 0.5rem var(--sp-3);
  margin-bottom: var(--sp-2);
}

.mom-icon { color: var(--tone); font-size: 1.15rem; align-self: center; flex: none; }

.mom-rotulo {
  font: 600 0.7em/1.2 var(--font-mono);
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--tone);
}

.mom-titulo {
  font-family: var(--font-display);
  font-weight: var(--w-display);
  font-size: 1.05em;
}

.mom-tempo {
  margin-left: auto;
  font: 500 0.75em/1.4 var(--font-mono);
  color: var(--tone);
  padding: 0.1em 0.55em; border-radius: 999px;
  background: color-mix(in oklab, var(--tone) 14%, transparent);
  border: 1px solid color-mix(in oklab, var(--tone) 32%, transparent);
  white-space: nowrap;
}

.mom-corpo { font-size: 0.94em; line-height: 1.45; }
.mom-corpo :deep(ul) { margin: 0; padding-left: 1.1em; }
.mom-corpo :deep(li) { margin: 0.15em 0; }
.mom-corpo :deep(p) { margin: 0.2em 0; }
.mom-corpo :deep(p:first-child) { margin-top: 0; }
.mom-corpo :deep(p:last-child) { margin-bottom: 0; }
</style>
