<script setup>
import { useSlideContext } from '@slidev/client'

// O intervalo, com o relógio do tamanho da sala. Numa aula de três horas a
// pergunta que a turma faz na porta é sempre a mesma — "volta que horas?" —, e
// deixar a contagem projetada responde por você.
// Campos: kicker, title, tempo, note. O corpo é opcional (o que vem depois).
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura tom="escuro" :cromo="false">
    <div class="pausa">
      <p v-if="fm.kicker" class="kicker entra">{{ fm.kicker }}</p>
      <h1 class="pausa-titulo entra" v-html="fm.title ?? 'Intervalo'" />

      <Cronometro v-if="fm.tempo" :tempo="fm.tempo" tamanho="grande" class="pausa-cron surge" />

      <p v-if="fm.note" class="pausa-nota entra" v-html="fm.note" />
      <div v-if="$slots.default" class="pausa-corpo quadro-md entra"><slot /></div>
    </div>
  </Moldura>
</template>

<style scoped>
.pausa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  height: 100%;
  --cor: var(--verde);
}

.pausa-titulo {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-size: var(--t-capa);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.pausa-cron { animation-delay: 140ms; }

.pausa-nota {
  margin: 0;
  font-size: var(--t-lead);
  color: var(--frente-2);
  max-width: 42ch;
  animation-delay: 200ms;
}

.pausa-corpo {
  font-size: var(--t-aux);
  color: var(--frente-2);
  max-width: 58ch;
  animation-delay: 240ms;
}
</style>
