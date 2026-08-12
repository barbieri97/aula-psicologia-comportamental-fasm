<script setup>
import { useSlideContext } from '@slidev/client'

// Citação de fonte primária — o Watson de 1913, o James de 1907. Numa aula de
// teoria, ler a frase original vale mais do que parafraseá-la.
// Campos: quote*, author, kicker.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura tom="escuro">
    <figure class="cit">
      <span class="cit-marca surge" aria-hidden="true">“</span>
      <blockquote class="cit-txt entra" v-html="fm.quote" />
      <figcaption v-if="fm.author" class="cit-autor entra">
        <span class="cit-traco risca-x" />
        <span v-html="fm.author" />
      </figcaption>
    </figure>
  </Moldura>
</template>

<style scoped>
.cit {
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  height: 100%;
  padding-left: 1rem;
}

.cit-marca {
  position: absolute;
  top: -1.6rem;
  left: -1.4rem;
  font-family: var(--fonte-titulo);
  font-size: 12rem;
  line-height: 1;
  color: color-mix(in oklab, var(--acento) 26%, transparent);
  pointer-events: none;
}

.cit-txt {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: 2.5rem;
  font-weight: 500;
  font-style: italic;
  line-height: 1.28;
  max-width: 30ch;
  text-wrap: pretty;
  animation-delay: 80ms;
}

.cit-txt :deep(strong) { font-style: normal; color: var(--acento); }

.cit-autor {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--fonte-mono);
  font-size: var(--t-aux);
  color: var(--frente-2);
  animation-delay: 220ms;
}

.cit-traco {
  display: block;
  width: 3rem;
  height: 2px;
  flex: none;
  background: var(--acento);
  animation-delay: 300ms;
}
</style>
