<script setup>
import { useSlideContext } from '@slidev/client'

// O layout de uso geral: kicker + título + corpo em markdown.
// Campos: kicker, title, ghost, foot.
//
// O corpo é uma tela livre — bullets, parágrafos e os componentes do tema
// (<Callout>, <Tabela>, <Circular>, <Momento>) se compõem aqui.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title" :ghost="fm.ghost">
    <div class="quadro-md"><slot /></div>
  </Moldura>
</template>

<style scoped>
.quadro-md {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
</style>
