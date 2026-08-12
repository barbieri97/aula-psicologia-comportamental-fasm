<script setup>
import { computed } from 'vue'

// Marca o ritmo de uma aula longa: atividade em dupla, discussão aberta, pausa
// e fechamento. Numa aula de três horas esses blocos precisam estar na tela, e
// não só nas notas do professor — é o que faz a turma saber o que está sendo
// pedido depois que você termina de falar.
//
//   <Momento tipo="atividade" tempo="12 min" titulo="Ache o agente oculto">…</Momento>
//
// A etiqueta de tempo é um <Cronometro>: clicar começa a contagem regressiva.
const TIPOS = {
  atividade: { icone: 'lucide:users', cor: 'var(--acento)', rotulo: 'Em duplas' },
  discussao: { icone: 'lucide:messages-square', cor: 'var(--azul)', rotulo: 'Discussão' },
  pausa: { icone: 'lucide:coffee', cor: 'var(--verde)', rotulo: 'Intervalo' },
  sintese: { icone: 'lucide:check-check', cor: 'var(--ambar)', rotulo: 'Fechamento' },
}

const props = defineProps({
  tipo: { type: String, default: 'atividade' },  // atividade | discussao | pausa | sintese
  tempo: { type: String, default: '' },
  titulo: { type: String, default: '' },
  rotulo: { type: String, default: '' },         // sobrescreve o rótulo do tipo
})

const cfg = computed(() => TIPOS[props.tipo] ?? TIPOS.atividade)
</script>

<template>
  <div class="mom entra" :style="{ '--cor': cfg.cor }">
    <div class="mom-topo">
      <Icon :name="cfg.icone" class="mom-icone" />
      <span class="mom-rotulo">{{ rotulo || cfg.rotulo }}</span>
      <span v-if="titulo" class="mom-titulo" v-html="titulo" />
      <Cronometro v-if="tempo" :tempo="tempo" class="mom-tempo" />
    </div>

    <div class="mom-corpo"><slot /></div>
  </div>
</template>

<style scoped>
.mom {
  padding: 1.1rem 1.35rem;
  border-radius: var(--raio);
  background: color-mix(in oklab, var(--cor) 6%, var(--superficie));
  border: 1px solid color-mix(in oklab, var(--cor) 24%, transparent);
  border-left: 5px solid var(--cor);
  box-shadow: var(--sombra);
}

.mom-topo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 0.9rem;
  margin-bottom: 0.7rem;
}

.mom-icone { font-size: 1.5rem; color: var(--cor); }

.mom-rotulo {
  font-family: var(--fonte-mono);
  font-size: var(--t-meta);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cor);
}

.mom-titulo {
  font-family: var(--fonte-titulo);
  font-size: var(--t-sub);
  font-weight: 700;
  line-height: 1.15;
}

.mom-tempo { margin-left: auto; }

.mom-corpo { font-size: var(--t-corpo); line-height: 1.45; }
.mom-corpo :deep(ul),
.mom-corpo :deep(ol) { margin: 0; display: flex; flex-direction: column; gap: 0.35rem; }
.mom-corpo :deep(p) { margin: 0.3rem 0; max-width: 74ch; }
.mom-corpo :deep(p:first-child) { margin-top: 0; }
.mom-corpo :deep(p:last-child) { margin-bottom: 0; }
</style>
