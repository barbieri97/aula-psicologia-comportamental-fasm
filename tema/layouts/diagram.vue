<script setup>
import { useSlideContext } from '@slidev/client'

// Palco para um visual: um Mermaid, uma figura, um esquema montado com os
// componentes do tema. Quando a ideia é uma estrutura ou um fluxo, desenhar
// ganha de descrever em bullets.
// Campos: kicker, title, note. O corpo do slide é o desenho.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title">
    <div class="diag">
      <div class="diag-palco entra"><slot /></div>
      <p v-if="fm.note" class="diag-nota entra" v-html="fm.note" />
    </div>
  </Moldura>
</template>

<style scoped>
.diag {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
}

.diag-palco {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem;
  border-radius: var(--raio);
  background: var(--superficie);
  border: 1px dashed var(--linha-forte);
}

/* O Mermaid desenha no tamanho natural do grafo, que numa sala vira letra de
   bula. Aqui ele é esticado até a largura do palco (o `max-width` inline que o
   Mermaid escreve no SVG precisa ser derrubado), com um teto de altura para não
   empurrar a nota para fora do slide. */
.diag-palco :deep(.mermaid) { width: 100%; }

.diag-palco :deep(svg) {
  width: 100% !important;
  max-width: none !important;
  height: auto;
  max-height: 19rem;
}

.diag-nota {
  margin: 0;
  align-self: center;
  max-width: 62ch;
  text-align: center;
  font-size: var(--t-aux);
  line-height: 1.4;
  color: var(--frente-2);
  animation-delay: 140ms;
}

.diag-nota :deep(strong) { color: var(--frente); font-weight: 700; }
</style>
