<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// Dois a quatro subtemas em cartões. Campos: kicker, title, panels*[{ icon, title, items[] }].
const { $frontmatter: fm } = useSlideContext()
const colunas = computed(() => Math.min(fm.panels?.length ?? 1, 3))
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title">
    <div class="paineis entra-lista" :style="{ '--cols': colunas }">
      <section v-for="(p, i) in fm.panels" :key="i" class="painel">
        <header class="painel-topo">
          <span v-if="p.icon" class="painel-icone"><Icon :name="p.icon" /></span>
          <h2 class="painel-titulo" v-html="p.title" />
        </header>
        <ul v-if="Array.isArray(p.items)" class="painel-itens">
          <li v-for="(item, j) in p.items" :key="j" v-html="item" />
        </ul>
      </section>
    </div>

    <!-- Corpo opcional: o fecho que os painéis pedem (um <Callout>, uma frase). -->
    <div v-if="$slots.default" class="paineis-extra quadro-md"><slot /></div>
  </Moldura>
</template>

<style scoped>
.paineis-extra {
  margin-top: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.paineis {
  display: grid;
  grid-template-columns: repeat(var(--cols, 2), 1fr);
  gap: 1.1rem;
  align-items: stretch;
}

.painel {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.1rem 1.25rem;
  border-radius: var(--raio);
  background: var(--superficie);
  border: 1px solid var(--superficie-linha);
  box-shadow: var(--sombra);
}

.painel-topo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px dashed var(--linha-forte);
}

.painel-icone {
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  flex: none;
  border-radius: var(--raio-p);
  background: color-mix(in oklab, var(--acento) 12%, transparent);
  color: var(--acento);
  font-size: 1.4rem;
}

.painel-titulo {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-sub);
  font-weight: 700;
  line-height: 1.15;
}

.painel-itens {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: var(--t-aux);
  line-height: 1.35;
  color: var(--frente-2);
}

.painel-itens li {
  position: relative;
  padding-left: 1.1rem;
}

.painel-itens li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: color-mix(in oklab, var(--acento) 70%, transparent);
}

.painel-itens :deep(strong) { color: var(--frente); }
</style>
