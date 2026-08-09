<script setup>
// Explicação circular — o dispositivo que se repete nos três capítulos do Baum:
// observa-se um comportamento, infere-se uma entidade a partir dele, e então
// a entidade é apresentada como causa do mesmo comportamento que a originou.
//   <Circular observacao="Come vegetais" ficcao="Acredita no vegetarianismo" />
defineProps({
  observacao: { type: String, required: true },   // o que de fato se observa
  ficcao: { type: String, required: true },       // a entidade inferida
  inferencia: { type: String, default: 'inferimos' },
  explicacao: { type: String, default: '“explica”' },
  nota: { type: String, default: '' },            // fecho opcional sob o laço
})
</script>

<template>
  <div class="circ">
    <div class="circ-loop">
      <div class="circ-box circ-obs">
        <span class="circ-tag">observado</span>
        <span class="circ-txt" v-html="observacao" />
      </div>

      <div class="circ-mid">
        <div class="circ-arrow">
          <span class="circ-lbl" v-html="inferencia" />
          <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 6 H92" />
            <path d="M86 2 L94 6 L86 10" />
          </svg>
        </div>
        <div class="circ-arrow circ-back">
          <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M8 6 H98" />
            <path d="M14 2 L6 6 L14 10" />
          </svg>
          <span class="circ-lbl" v-html="explicacao" />
        </div>
      </div>

      <div class="circ-box circ-fic">
        <span class="circ-tag">inferido</span>
        <span class="circ-txt" v-html="ficcao" />
      </div>
    </div>

    <p v-if="nota" class="circ-nota" v-html="nota" />
  </div>
</template>

<style scoped>
.circ { display: flex; flex-direction: column; gap: var(--sp-3); }

.circ-loop {
  display: grid;
  grid-template-columns: 1fr minmax(6rem, 0.8fr) 1fr;
  align-items: stretch;
  gap: var(--sp-2);
}

.circ-box {
  display: flex; flex-direction: column; gap: 0.35rem;
  justify-content: center;
  padding: var(--sp-3) var(--sp-4);
  border-radius: var(--radius);
  background: var(--surface-bg);
  border: var(--surface-border);
}
.circ-obs { border-left: 3px solid var(--fg-dim); }
.circ-fic { border-left: 3px solid var(--accent); }

.circ-tag {
  font: 600 0.68em/1.2 var(--font-mono);
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--fg-dim);
}
.circ-fic .circ-tag { color: var(--accent); }

.circ-txt { font-size: 0.98em; line-height: 1.35; }

.circ-mid { display: flex; flex-direction: column; justify-content: center; gap: var(--sp-3); }

.circ-arrow { display: flex; flex-direction: column; align-items: center; gap: 0.15rem; }
.circ-arrow svg {
  width: 100%; height: 12px; display: block;
  fill: none; stroke: var(--accent); stroke-width: 1.5;
  stroke-linecap: round; stroke-linejoin: round;
}
.circ-back svg { stroke: var(--fg-dim); }
.circ-back { flex-direction: column-reverse; }

.circ-lbl {
  font: 500 0.72em/1.2 var(--font-mono);
  color: var(--fg-dim); text-align: center; white-space: nowrap;
}

.circ-nota {
  margin: 0; font-size: 0.86em; line-height: 1.4;
  color: var(--fg-dim); text-align: center;
}
</style>
