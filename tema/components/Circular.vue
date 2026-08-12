<script setup>
// Explicação circular — o dispositivo que se repete nos três capítulos do Baum:
// observa-se um comportamento, infere-se uma entidade a partir dele, e essa
// entidade é então apresentada como causa do mesmo comportamento que a gerou.
//
//   <Circular observacao="Come vegetais" ficcao="Acredita no vegetarianismo" />
//
// O laço fica em movimento contínuo: o tracejado corre de um lado ao outro sem
// parar, e é o próprio argumento — a explicação volta ao ponto de partida.
defineProps({
  observacao: { type: String, required: true },  // o que de fato se observa
  ficcao: { type: String, required: true },      // a entidade inferida
  inferencia: { type: String, default: 'inferimos que…' },
  explicacao: { type: String, default: '…e por isso agiu assim' },
  nota: { type: String, default: '' },           // fecho opcional sob o laço
})
</script>

<template>
  <div class="circ entra">
    <div class="circ-laco">
      <div class="circ-caixa circ-obs">
        <span class="circ-tag">observado</span>
        <span class="circ-txt" v-html="observacao" />
      </div>

      <div class="circ-meio">
        <div class="circ-seta">
          <span class="circ-lbl" v-html="inferencia" />
          <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
            <path class="circ-fluxo" d="M2 6 H90" />
            <path class="circ-ponta" d="M84 2 L93 6 L84 10" vector-effect="non-scaling-stroke" />
          </svg>
        </div>

        <div class="circ-seta circ-volta">
          <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
            <path class="circ-fluxo" d="M98 6 H10" />
            <path class="circ-ponta" d="M16 2 L7 6 L16 10" vector-effect="non-scaling-stroke" />
          </svg>
          <span class="circ-lbl" v-html="explicacao" />
        </div>
      </div>

      <div class="circ-caixa circ-fic">
        <span class="circ-tag">inferido</span>
        <span class="circ-txt" v-html="ficcao" />
      </div>
    </div>

    <p v-if="nota" class="circ-nota" v-html="nota" />
  </div>
</template>

<style scoped>
.circ {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.circ-laco {
  display: grid;
  grid-template-columns: 1fr minmax(9rem, 0.85fr) 1fr;
  align-items: stretch;
  gap: 0.6rem;
}

.circ-caixa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem 1.2rem;
  border-radius: var(--raio);
  background: var(--superficie);
  border: 1px solid var(--superficie-linha);
  box-shadow: var(--sombra);
}

.circ-obs { border-left: 4px solid var(--frente-2); }
.circ-fic { border-left: 4px solid var(--acento); }

.circ-tag {
  font-family: var(--fonte-mono);
  font-size: var(--t-meta);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--frente-2);
}

.circ-fic .circ-tag { color: var(--acento); }

.circ-txt {
  font-size: var(--t-corpo);
  line-height: 1.3;
  font-weight: 600;
}

.circ-meio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.1rem;
}

.circ-seta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.circ-volta { flex-direction: column-reverse; }

.circ-seta svg {
  width: 100%;
  height: 12px;
  display: block;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.circ-fluxo {
  stroke: var(--acento);
  stroke-dasharray: 6 5;
  animation: circ-corre 1.1s linear infinite;
}

.circ-ponta { stroke: var(--acento); }

.circ-volta .circ-fluxo,
.circ-volta .circ-ponta { stroke: var(--frente-2); }

@keyframes circ-corre {
  to { stroke-dashoffset: -11; }
}

.circ-lbl {
  font-family: var(--fonte-mono);
  font-size: var(--t-meta);
  color: var(--frente-2);
  text-align: center;
  line-height: 1.2;
}

.circ-nota {
  margin: 0;
  font-size: var(--t-aux);
  line-height: 1.4;
  color: var(--frente-2);
  text-align: center;
  max-width: 70ch;
  align-self: center;
}

@media (prefers-reduced-motion: reduce) {
  .circ-fluxo { animation: none; }
}

@media print {
  .circ-fluxo { animation: none; }
}
</style>
