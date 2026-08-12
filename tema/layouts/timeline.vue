<script setup>
import { useSlideContext } from '@slidev/client'

// Sequência datada. A linha é riscada da esquerda para a direita e os marcos
// pipocam sobre ela, na ordem — é a cronologia acontecendo.
// Campos: kicker, title, events*[{ date, title, desc }].
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title">
    <div class="tl">
      <span class="tl-linha risca-x" aria-hidden="true" />
      <ol class="tl-lista entra-lista">
        <li v-for="(e, i) in fm.events" :key="i" class="tl-item">
          <span class="tl-data">{{ e.date }}</span>
          <span class="tl-ponto" aria-hidden="true" />
          <span class="tl-titulo" v-html="e.title" />
          <span v-if="e.desc" class="tl-desc" v-html="e.desc" />
        </li>
      </ol>
    </div>
  </Moldura>
</template>

<style scoped>
.tl { position: relative; }

.tl-linha {
  position: absolute;
  top: 2.85rem;
  left: 6%;
  right: 6%;
  height: 2px;
  background: var(--linha-forte);
  animation-delay: 60ms;
}

.tl-lista {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 1rem;
}

.tl-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.35rem;
}

.tl-data {
  font-family: var(--fonte-mono);
  font-size: var(--t-meta);
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--frente-2);
  margin-bottom: 0.25rem;
}

.tl-ponto {
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 50%;
  background: var(--acento);
  border: 3px solid var(--fundo);
  box-shadow: 0 0 0 2px var(--acento);
  margin-bottom: 0.5rem;
}

.tl-titulo {
  font-family: var(--fonte-titulo);
  font-size: var(--t-sub);
  font-weight: 700;
  line-height: 1.15;
}

.tl-desc {
  font-size: var(--t-aux);
  line-height: 1.35;
  color: var(--frente-2);
  max-width: 24ch;
}
</style>
