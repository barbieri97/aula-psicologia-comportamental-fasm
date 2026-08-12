<script setup>
import { computed } from 'vue'

// Tabela de aula: linhas entram em cascata e uma linha (ou coluna) pode ficar
// realçada — que é como se usa no quadro, apontando para a linha que importa.
//
//   <Tabela
//     :dados="[['Ciência', 'Agente oculto'], ['Química', 'flogisto']]"
//     cabecalho
//     realce="linha:2" />
//
// `realce` conta a partir de 1 e inclui o cabeçalho, para o número bater com o
// que se vê na tela. As células aceitam HTML (<strong>, <em>, <span>).
const props = defineProps({
  dados: { type: Array, required: true },
  cabecalho: { type: Boolean, default: false },
  realce: { type: String, default: '' },     // "linha:N" | "coluna:N"
  compacta: { type: Boolean, default: false },
})

const alvo = computed(() => {
  const m = /^(linha|coluna):(\d+)$/.exec(props.realce.trim())
  return m ? { tipo: m[1], n: Number(m[2]) } : null
})

const linhas = computed(() => (props.cabecalho ? props.dados.slice(1) : props.dados))
const cabeca = computed(() => (props.cabecalho ? props.dados[0] : null))

// Índice na tela (1-based, contando o cabeçalho) de uma linha do corpo.
const noEcra = (i) => (props.cabecalho ? i + 2 : i + 1)

const realcaLinha = (i) => alvo.value?.tipo === 'linha' && alvo.value.n === noEcra(i)
const realcaCabeca = () => alvo.value?.tipo === 'linha' && alvo.value.n === 1
const realcaColuna = (j) => alvo.value?.tipo === 'coluna' && alvo.value.n === j + 1
</script>

<template>
  <div class="tabela-wrap entra" :class="{ 'is-compacta': compacta }">
    <table class="tabela">
      <thead v-if="cabeca">
        <tr :class="{ 'is-realce': realcaCabeca() }">
          <th
            v-for="(celula, j) in cabeca"
            :key="j"
            :class="{ 'is-realce-col': realcaColuna(j) }"
            v-html="celula"
          />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(linha, i) in linhas"
          :key="i"
          :class="{ 'is-realce': realcaLinha(i) }"
          :style="{ '--atraso': `${i * 60}ms` }"
        >
          <td
            v-for="(celula, j) in linha"
            :key="j"
            :class="{ 'is-realce-col': realcaColuna(j) }"
            v-html="celula"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tabela-wrap {
  border-radius: var(--raio);
  border: 1px solid var(--superficie-linha);
  background: var(--superficie);
  overflow: hidden;
  box-shadow: var(--sombra);
}

.tabela {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--t-aux);
  line-height: 1.35;
}

th,
td {
  padding: 0.72rem 1rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid color-mix(in oklab, var(--superficie-linha) 70%, transparent);
}

.is-compacta th,
.is-compacta td { padding: 0.5rem 0.85rem; }

th {
  font-family: var(--fonte-mono);
  font-size: var(--t-meta);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--frente-2);
  background: color-mix(in oklab, var(--frente) 4%, transparent);
}

tbody tr:last-child td { border-bottom: 0; }

tbody tr {
  animation: q-sobe var(--mov-dur) var(--mov-curva) both;
  animation-delay: var(--atraso, 0ms);
}

tbody td:first-child { font-weight: 600; }

tr.is-realce td {
  background: color-mix(in oklab, var(--acento) 12%, transparent);
  color: var(--frente);
  font-weight: 600;
}

/* A barra de realce marca a linha uma vez, na borda — em todas as células ela
   viraria um risco vermelho entre coluna e coluna. */
tr.is-realce td:first-child { box-shadow: inset 4px 0 0 var(--acento); }

td.is-realce-col,
th.is-realce-col {
  background: color-mix(in oklab, var(--acento) 10%, transparent);
}

tr.is-realce td.is-realce-col {
  background: color-mix(in oklab, var(--acento) 20%, transparent);
}

:deep(em) { font-style: italic; color: var(--acento); }

@media (prefers-reduced-motion: reduce) {
  tbody tr { animation: none; }
}

@media print {
  tbody tr { animation: none; }
}
</style>
