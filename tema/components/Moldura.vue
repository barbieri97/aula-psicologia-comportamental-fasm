<script setup>
import { computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'
import { usePartes } from '../lib/partes.js'

// A moldura de todo slide: fundo, trilha, kicker + título, corpo e rodapé.
// Cada layout só decide o que vai no corpo — o cromo é sempre este, e é o que
// faz um deck inteiro parecer uma peça só.
//
// ATENÇÃO ao nome das props. O Slidev entrega o frontmatter inteiro como props
// do layout; o que o layout não declara desce como atributo até o primeiro
// elemento raiz — esta Moldura — e, se o nome bater com uma prop daqui, ela é
// preenchida sozinha. Era o que fazia o kicker sair duas vezes quando esta prop
// se chamava `kicker`. Daí `etiqueta`: nenhum campo de frontmatter tem esse nome.
//
// E nada de `inheritAttrs: false` para resolver isso: é por esse caminho que
// chegam `class` e `style` de fora (o `class:` do frontmatter, por exemplo).
const props = defineProps({
  tom: { type: String, default: 'claro' },   // claro (papel) | escuro (tinta)
  etiqueta: { type: String, default: '' },   // o kicker do slide
  titulo: { type: String, default: '' },
  ghost: { type: String, default: '' },      // glifo gigante de fundo
  cromo: { type: Boolean, default: true },   // rodapé + trilha
  ajustar: { type: Boolean, default: true }, // encolher o corpo se não couber
  centro: { type: Boolean, default: false }, // corpo centralizado (frase, citação)
})

const { $slidev, $frontmatter } = useSlideContext()
const nav = useNav()
const { atual } = usePartes()

const titulacaoDeck = computed(() => $frontmatter?.foot || $slidev?.configs?.title || '')
const pagina = computed(() => nav.currentPage?.value ?? 0)
const total = computed(() => nav.total?.value ?? 0)
</script>

<template>
  <div class="quadro" :data-tom="props.tom">
    <Trilha v-if="props.cromo" />

    <div v-if="props.ghost" class="fantasma" aria-hidden="true">{{ props.ghost }}</div>

    <header v-if="props.etiqueta || props.titulo" class="quadro-topo entra">
      <p v-if="props.etiqueta" class="kicker">{{ props.etiqueta }}</p>
      <h1 v-if="props.titulo" class="titulo" v-html="props.titulo" />
      <span v-if="props.titulo" class="titulo-risco risca-x" />
    </header>

    <div class="quadro-corpo" :class="{ 'is-centro': props.centro }">
      <Ajuste v-if="props.ajustar"><slot /></Ajuste>
      <slot v-else />
    </div>

    <footer v-if="props.cromo" class="rodape">
      <span class="rodape-deck">{{ titulacaoDeck }}</span>
      <span v-if="atual" class="rodape-parte">
        <span class="rodape-parte-num">{{ atual.index }}</span>
        {{ atual.titulo }}
      </span>
      <span class="rodape-linha" />
      <span class="rodape-num">{{ pagina }}<span class="rodape-barra">/</span>{{ total }}</span>
    </footer>
  </div>
</template>

<style scoped>
.quadro-topo { flex: none; margin-bottom: 0.25rem; }

/* O filete sob o título é riscado da esquerda para a direita quando o slide
   entra — a assinatura do tema, e o que separa o cabeçalho do conteúdo. */
.titulo-risco {
  display: block;
  height: 2px;
  margin-top: 0.7rem;
  background: linear-gradient(to right, var(--acento), color-mix(in oklab, var(--acento) 12%, transparent));
}

.quadro-corpo.is-centro {
  align-items: center;
  text-align: center;
}

.fantasma {
  position: absolute;
  right: -0.06em;
  bottom: -0.34em;
  font-family: var(--fonte-titulo);
  font-size: 22rem;
  font-weight: 800;
  line-height: 1;
  color: color-mix(in oklab, var(--frente) 5%, transparent);
  pointer-events: none;
  user-select: none;
}

.rodape-deck {
  max-width: 34ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rodape-parte {
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: color-mix(in oklab, var(--acento) 80%, var(--frente));
}

.rodape-parte-num {
  font-weight: 600;
  padding: 0.05em 0.4em;
  border-radius: 999px;
  background: color-mix(in oklab, var(--acento) 14%, transparent);
}

.rodape-barra { opacity: 0.45; margin: 0 0.15em; }
</style>
