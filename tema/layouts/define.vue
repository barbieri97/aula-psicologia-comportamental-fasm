<script setup>
import { useSlideContext } from '@slidev/client'

// Termo + definição + desdobramentos. É o layout que mais aparece numa aula de
// teoria: "o que é determinismo?", "o que é mentalismo?".
// Campos: kicker, term*, definition, points[].
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker">
    <div class="def">
      <h1 class="def-termo entra" v-html="fm.term" />
      <p v-if="fm.definition" class="def-txt entra" v-html="fm.definition" />

      <ul v-if="Array.isArray(fm.points) && fm.points.length" class="def-pontos entra-lista">
        <li v-for="(p, i) in fm.points" :key="i">
          <span class="def-marca" aria-hidden="true" />
          <span v-html="p" />
        </li>
      </ul>

      <!-- O corpo é opcional e serve para o aparte que a definição pede
           ("só esta versão conflita com o behaviorismo"). -->
      <div v-if="$slots.default" class="def-extra quadro-md"><slot /></div>
    </div>
  </Moldura>
</template>

<style scoped>
.def {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.def-termo {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-titulo);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.015em;
  max-width: 24ch;
}

.def-termo :deep(em) { font-style: italic; color: var(--acento); }

.def-txt {
  margin: 0;
  padding: 1rem 1.3rem;
  border-radius: var(--raio);
  background: var(--superficie);
  border: 1px solid var(--superficie-linha);
  border-left: 5px solid var(--acento);
  box-shadow: var(--sombra);
  font-size: var(--t-lead);
  line-height: 1.32;
  font-weight: 500;
  max-width: 44ch;
  animation-delay: 90ms;
}

.def-pontos {
  margin: 0.2rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: var(--t-aux);
  color: var(--frente-2);
}

/* A cascata de entrada vem da classe `entra-lista` (styles/movimento.css). */
.def-pontos li {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  max-width: 62ch;
}

.def-marca {
  flex: none;
  width: 0.7rem;
  height: 2px;
  background: var(--acento);
  transform: translateY(-0.32em);
}

.def-pontos :deep(strong) { color: var(--frente); font-weight: 700; }

.def-extra {
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
</style>
