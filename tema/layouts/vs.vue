<script setup>
import { useSlideContext } from '@slidev/client'

// A oposição frente a frente — realismo × pragmatismo, natural × fictício.
// Os dois painéis entram por lados opostos e o divisor cai no meio: a forma
// diz "isto contra aquilo" antes de a turma ler qualquer palavra.
// Campos: kicker, title, label, left*{ title, items[] }, right*{ title, items[] }.
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title">
    <div class="vs">
      <section class="vs-lado vs-esq">
        <h2 class="vs-titulo" v-html="fm.left?.title" />
        <ul class="vs-itens">
          <li v-for="(item, i) in fm.left?.items ?? []" :key="i" v-html="item" />
        </ul>
      </section>

      <div class="vs-meio" aria-hidden="true">
        <span class="vs-fio risca-y" />
        <span class="vs-selo surge">{{ fm.label ?? '×' }}</span>
        <span class="vs-fio risca-y" />
      </div>

      <section class="vs-lado vs-dir">
        <h2 class="vs-titulo" v-html="fm.right?.title" />
        <ul class="vs-itens">
          <li v-for="(item, i) in fm.right?.items ?? []" :key="i" v-html="item" />
        </ul>
      </section>
    </div>
  </Moldura>
</template>

<style scoped>
.vs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.2rem;
  align-items: stretch;
}

.vs-lado {
  padding: 1.1rem 1.3rem;
  border-radius: var(--raio);
  background: var(--superficie);
  border: 1px solid var(--superficie-linha);
  box-shadow: var(--sombra);
  animation: q-sobe var(--mov-dur) var(--mov-curva) both;
}

.vs-esq { border-top: 4px solid var(--frente-2); }
.vs-dir { border-top: 4px solid var(--acento); animation-delay: 110ms; }

.vs-titulo {
  margin: 0 0 0.8rem;
  font-family: var(--fonte-titulo);
  font-size: var(--t-sub);
  font-weight: 700;
  line-height: 1.15;
}

.vs-esq .vs-titulo { color: var(--frente-2); }
.vs-dir .vs-titulo { color: var(--acento); }

.vs-itens {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: var(--t-aux);
  line-height: 1.35;
}

.vs-itens li {
  position: relative;
  padding-left: 1.1rem;
}

.vs-itens li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 0.5rem;
  height: 2px;
  background: currentColor;
  opacity: 0.5;
}

.vs-itens :deep(strong) { color: var(--frente); }
.vs-itens :deep(em) { font-style: italic; color: var(--acento); }

.vs-meio {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
}

.vs-fio {
  flex: 1;
  width: 2px;
  background: var(--linha-forte);
  animation-delay: 150ms;
}

.vs-selo {
  display: grid;
  place-items: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: var(--acento);
  color: var(--fundo);
  font-family: var(--fonte-mono);
  font-size: 1.3rem;
  font-weight: 600;
  animation-delay: 240ms;
}
</style>
