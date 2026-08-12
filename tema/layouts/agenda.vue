<script setup>
import { useSlideContext } from '@slidev/client'

// O caminho da aula, numerado. Campos: kicker, title, items*[{ topic, desc }].
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title">
    <ol class="agenda entra-lista">
      <li v-for="(item, i) in fm.items" :key="i" class="agenda-item">
        <span class="agenda-num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="agenda-txt">
          <span class="agenda-topico" v-html="item.topic" />
          <span v-if="item.desc" class="agenda-desc" v-html="item.desc" />
        </span>
      </li>
    </ol>
  </Moldura>
</template>

<style scoped>
/* O gap e o padding são apertados de propósito: o tema documenta aulas de três a
   SEIS partes, e com 0.7rem nos dois a agenda de seis itens estourava a altura e
   saía encolhida a 0.83. Com estes valores, seis itens cabem em ×1 e quatro
   continuam folgados. */
.agenda {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.agenda-item {
  display: flex;
  align-items: baseline;
  gap: 1.1rem;
  padding: 0.5rem 1.1rem;
  border-radius: var(--raio);
  background: var(--superficie);
  border: 1px solid var(--superficie-linha);
  border-left: 4px solid color-mix(in oklab, var(--acento) 55%, transparent);
}

.agenda-num {
  font-family: var(--fonte-mono);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--acento);
  flex: none;
}

.agenda-txt {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.agenda-topico {
  font-family: var(--fonte-titulo);
  font-size: var(--t-sub);
  font-weight: 700;
  line-height: 1.15;
}

.agenda-desc {
  font-size: var(--t-aux);
  line-height: 1.35;
  color: var(--frente-2);
}
</style>
