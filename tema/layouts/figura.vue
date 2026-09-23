<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { assetUrl } from '../lib/asset.js'

// Uma imagem e nada mais: sem moldura, sem kicker, sem título, sem rodapé — a
// foto ocupa o quadro de borda a borda. É o único layout do tema sem cromo
// (o `iframe`, que também não tem, é nativo do Slidev). Use quando a imagem é
// o argumento; quando ela ilustra algo que você vai dizer em volta, o palco do
// `diagram` é o lugar certo.
// Campos: image*, alt, fit.
//
// O caminho passa por `assetUrl()` porque aqui ele chega como string em tempo
// de execução — o Vite só reescreve a `--base` no `src` estático do template.
// Sem isso a figura funciona local e dá 404 no GitHub Pages.
//
// As props são declaradas (e não lidas só do $frontmatter, como nos outros
// layouts) para que `image`, `alt` e `fit` não desçam como atributos soltos até
// a <div> raiz — um `alt` num elemento que não é imagem é lixo no HTML.
const props = defineProps({
  image: { type: String, default: '' },  // caminho em aulas/public/, com a barra: "/foto.jpg"
  alt: { type: String, default: '' },    // o que a imagem mostra; vazio = decorativa
  fit: { type: String, default: 'cover' }, // cover (padrão, corta) | contain (inteira, com faixas)
})

const { $frontmatter: fm } = useSlideContext()

const arquivo = computed(() => assetUrl(props.image || fm.image || ''))
const descricao = computed(() => props.alt || fm.alt || '')
const encaixe = computed(() => ((props.fit || fm.fit) === 'contain' ? 'contain' : 'cover'))
</script>

<template>
  <div class="figura" :data-fit="encaixe">
    <img class="figura-img" :src="arquivo" :alt="descricao">
  </div>
</template>

<style scoped>
/* Tinta no fundo: com `fit: contain` as faixas dos lados ficam escuras, e a
   imagem parece emoldurada de propósito em vez de perdida no branco. */
.figura {
  width: 100%;
  height: 100%;
  background: var(--tinta);
  overflow: hidden;
}

/* Este `img` não passa pela regra `.quadro img` (teto de 19rem) porque o layout
   não monta a `.quadro` — é justamente o que faz a imagem sangrar. */
.figura-img {
  display: block;
  width: 100%;
  height: 100%;
  animation: q-aparece var(--mov-dur) var(--mov-curva) both;
}

.figura[data-fit='cover'] .figura-img { object-fit: cover; }
.figura[data-fit='contain'] .figura-img { object-fit: contain; }

@media (prefers-reduced-motion: reduce), print {
  .figura-img { animation: none; }
}
</style>
