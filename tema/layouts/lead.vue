<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// Abertura da aula. Título ancorado embaixo à esquerda, muito ar em cima —
// o slide que fica projetado enquanto a turma chega.
// Campos: index, kicker, title*, subtitle, date, author.
const { $frontmatter: fm } = useSlideContext()

// O `date` do headmatter é ISO porque a landing do site o consome assim; na
// capa ele aparece por extenso, como se escreveria no quadro.
const data = computed(() => {
  const bruto = fm.date
  if (!bruto) return ''
  const d = bruto instanceof Date ? bruto : new Date(`${bruto}T12:00:00`)
  if (Number.isNaN(d.getTime())) return String(bruto)
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
})
</script>

<template>
  <Moldura tom="escuro" :cromo="false" :ajustar="false">
    <div class="capa">
      <div class="capa-topo entra">
        <span v-if="fm.index" class="capa-index">{{ fm.index }}</span>
        <span v-if="fm.kicker" class="capa-kicker">{{ fm.kicker }}</span>
      </div>

      <div class="capa-baixo">
        <h1 class="capa-titulo entra" v-html="fm.title" />
        <span class="capa-risco risca-x" />
        <p v-if="fm.subtitle" class="capa-sub entra" v-html="fm.subtitle" />
        <p v-if="fm.author || data" class="capa-meta entra">
          <span v-if="fm.author">{{ fm.author }}</span>
          <span v-if="fm.author && data" class="capa-ponto">·</span>
          <span v-if="data">{{ data }}</span>
        </p>
      </div>
    </div>
  </Moldura>
</template>

<style scoped>
.capa {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.capa-topo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.capa-index {
  font-family: var(--fonte-mono);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--fundo);
  background: var(--acento);
  padding: 0.15em 0.55em;
  border-radius: var(--raio-p);
}

.capa-kicker {
  font-family: var(--fonte-mono);
  font-size: var(--t-kicker);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--frente-2);
}

.capa-baixo { padding-bottom: 0.5rem; }

.capa-titulo {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-capa);
  font-weight: 800;
  line-height: 1.03;
  letter-spacing: -0.02em;
  max-width: 20ch;
  text-wrap: balance;
}

.capa-titulo :deep(em) { font-style: italic; color: var(--acento); }

.capa-risco {
  display: block;
  width: 7rem;
  height: 4px;
  margin: 1.1rem 0;
  border-radius: 2px;
  background: var(--acento);
  animation-delay: 220ms;
}

.capa-sub {
  margin: 0;
  font-size: var(--t-lead);
  line-height: 1.35;
  color: var(--frente-2);
  max-width: 52ch;
  animation-delay: 120ms;
}

.capa-meta {
  margin: 1rem 0 0;
  font-family: var(--fonte-mono);
  font-size: var(--t-meta);
  color: color-mix(in oklab, var(--frente) 45%, transparent);
  animation-delay: 200ms;
}

.capa-ponto { margin: 0 0.5em; }
</style>
