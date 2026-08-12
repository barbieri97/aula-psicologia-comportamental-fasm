<script setup>
import { useSlideContext } from '@slidev/client'

// Um número, do tamanho da sala. O <Numero> conta até o valor ao entrar.
// Campos: kicker, value*, unit, label, ghost.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :ghost="fm.ghost">
    <div class="met">
      <div class="met-num entra">
        <Numero :valor="fm.value" />
        <span v-if="fm.unit" class="met-unidade">{{ fm.unit }}</span>
      </div>
      <div class="met-lado">
        <span class="met-risco risca-y" aria-hidden="true" />
        <p v-if="fm.label" class="met-label entra" v-html="fm.label" />
      </div>
    </div>
  </Moldura>
</template>

<style scoped>
.met {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2.2rem;
}

.met-num {
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
  font-family: var(--fonte-titulo);
  font-size: var(--t-numero);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--acento);
}

.met-unidade {
  font-size: 0.28em;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--frente-2);
}

.met-lado {
  display: grid;
  grid-template-columns: 2px 1fr;
  gap: 1.6rem;
  align-items: center;
}

.met-risco {
  align-self: stretch;
  min-height: 5rem;
  background: var(--linha-forte);
  animation-delay: 160ms;
}

.met-label {
  margin: 0;
  font-size: var(--t-lead);
  line-height: 1.3;
  max-width: 30ch;
  animation-delay: 120ms;
}

.met-label :deep(em) { font-style: italic; color: var(--acento); }
.met-label :deep(strong) { font-weight: 700; }
</style>
