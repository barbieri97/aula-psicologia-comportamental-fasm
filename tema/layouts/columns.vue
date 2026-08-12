<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// Duas ou três listas paralelas, sem a carga de oposição do `vs`.
// Campos: kicker, title, columns*[{ title, items[] }].
const { $frontmatter: fm } = useSlideContext()
const colunas = computed(() => Math.min(fm.columns?.length ?? 2, 3))
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title">
    <div class="cols entra-lista" :style="{ '--cols': colunas }">
      <section v-for="(c, i) in fm.columns" :key="i" class="col">
        <h2 class="col-titulo" v-html="c.title" />
        <span class="col-risco risca-x" aria-hidden="true" />
        <ul v-if="Array.isArray(c.items)" class="col-itens">
          <li v-for="(item, j) in c.items" :key="j" v-html="item" />
        </ul>
      </section>
    </div>

    <!-- Corpo opcional: o fecho que as colunas pedem (um <Callout>, uma frase). -->
    <div v-if="$slots.default" class="cols-extra quadro-md"><slot /></div>
  </Moldura>
</template>

<style scoped>
.cols-extra {
  margin-top: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cols {
  display: grid;
  grid-template-columns: repeat(var(--cols, 2), 1fr);
  gap: 1.6rem;
}

.col + .col { border-left: 1px dashed var(--linha-forte); padding-left: 1.6rem; }

.col-titulo {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-sub);
  font-weight: 700;
  line-height: 1.15;
}

.col-risco {
  display: block;
  width: 2.6rem;
  height: 3px;
  margin: 0.55rem 0 0.9rem;
  border-radius: 2px;
  background: var(--acento);
}

.col-itens {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: var(--t-aux);
  line-height: 1.4;
}

.col-itens li {
  position: relative;
  padding-left: 1.2rem;
}

.col-itens li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.58em;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 2px;
  background: color-mix(in oklab, var(--acento) 65%, transparent);
  transform: rotate(45deg);
}

.col-itens :deep(strong) { color: var(--frente); }
.col-itens :deep(em) { font-style: italic; color: var(--acento); }
</style>
