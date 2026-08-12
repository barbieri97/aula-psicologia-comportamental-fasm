<script setup>
import { useSlideContext } from '@slidev/client'

// Divisor de parte. Além de anunciar o trecho, é o que alimenta a trilha do
// topo e o rodapé de todos os slides seguintes (ver lib/partes.js) — por isso
// vale marcar as 3 a 6 partes de uma aula longa.
// Campos: index, kicker, title*, subtitle.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura tom="escuro" :ajustar="false">
    <div class="secao">
      <span v-if="fm.index" class="secao-index surge">{{ fm.index }}</span>
      <div class="secao-txt">
        <p v-if="fm.kicker" class="kicker entra">{{ fm.kicker }}</p>
        <h1 class="secao-titulo entra" v-html="fm.title" />
        <span class="secao-risco risca-x" />
        <p v-if="fm.subtitle" class="secao-sub entra" v-html="fm.subtitle" />
      </div>
    </div>
  </Moldura>
</template>

<style scoped>
.secao {
  display: flex;
  align-items: center;
  gap: 2.4rem;
  height: 100%;
}

.secao-index {
  font-family: var(--fonte-titulo);
  font-size: 9rem;
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 3px var(--acento);
  flex: none;
}

.secao-txt { min-width: 0; }

.secao-titulo {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-capa);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-wrap: balance;
  animation-delay: 80ms;
}

.secao-titulo :deep(em) { font-style: italic; color: var(--acento); }

.secao-risco {
  display: block;
  width: 100%;
  max-width: 26rem;
  height: 2px;
  margin: 1rem 0;
  background: linear-gradient(to right, var(--acento), transparent);
  animation-delay: 260ms;
}

.secao-sub {
  margin: 0;
  font-size: var(--t-lead);
  line-height: 1.35;
  color: var(--frente-2);
  max-width: 46ch;
  animation-delay: 180ms;
}
</style>
