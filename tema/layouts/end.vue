<script setup>
import { useSlideContext } from '@slidev/client'

// Fechamento: o que vem na próxima aula e o que ler até lá.
// Campos: title, subtitle, contact.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura tom="escuro" :cromo="false">
    <div class="fim">
      <h1 class="fim-titulo entra" v-html="fm.title" />
      <span class="fim-risco risca-x" aria-hidden="true" />
      <p v-if="fm.subtitle" class="fim-sub entra" v-html="fm.subtitle" />
      <p v-if="fm.contact" class="fim-contato entra" v-html="fm.contact" />
    </div>
  </Moldura>
</template>

<style scoped>
.fim {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.9rem;
  height: 100%;
}

.fim-titulo {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-capa);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.fim-risco {
  display: block;
  width: 5rem;
  height: 4px;
  border-radius: 2px;
  background: var(--acento);
  animation-delay: 200ms;
}

.fim-sub {
  margin: 0;
  font-size: var(--t-lead);
  line-height: 1.35;
  color: var(--frente-2);
  max-width: 44ch;
  animation-delay: 100ms;
}

.fim-contato {
  margin: 0.6rem 0 0;
  font-family: var(--fonte-mono);
  font-size: var(--t-aux);
  color: color-mix(in oklab, var(--frente) 55%, transparent);
  animation-delay: 180ms;
}
</style>
