<script setup>
import { useSlideContext } from '@slidev/client'

// Uma frase, a tela inteira. Para a ideia que você quer que sobre da aula.
// Campos: kicker, title*.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura tom="escuro">
    <div class="frase">
      <p v-if="fm.kicker" class="kicker entra">{{ fm.kicker }}</p>
      <p class="frase-txt entra" v-html="fm.title" />
      <div class="frase-aspas" aria-hidden="true">
        <span class="risca-x" />
      </div>
      <div v-if="$slots.default" class="frase-corpo quadro-md entra"><slot /></div>
    </div>
  </Moldura>
</template>

<style scoped>
.frase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9rem;
  height: 100%;
  text-align: center;
  align-items: center;
}

.frase-txt {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-frase);
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.02em;
  max-width: 26ch;
  text-wrap: balance;
  animation-delay: 60ms;
}

.frase-txt :deep(em) { font-style: italic; color: var(--acento); }

.frase-aspas span {
  display: block;
  width: 6rem;
  height: 4px;
  border-radius: 2px;
  background: var(--acento);
  animation-delay: 280ms;
}

.frase-corpo {
  font-size: var(--t-aux);
  color: var(--frente-2);
  max-width: 60ch;
  animation-delay: 220ms;
}
</style>
