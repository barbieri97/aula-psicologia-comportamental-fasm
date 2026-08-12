<script setup>
import { useSlideContext } from '@slidev/client'

// Um processo, na ordem. A linha que liga os passos é desenhada ao entrar, e
// os passos aparecem sobre ela — o movimento é o próprio argumento ("um leva
// ao outro").
// Campos: kicker, title, steps*[{ title, desc, icon }].
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Moldura :etiqueta="fm.kicker" :titulo="fm.title" :ghost="fm.ghost">
    <div class="passos">
      <span class="passos-linha risca-x" aria-hidden="true" />
      <ol class="passos-lista entra-lista">
        <li v-for="(p, i) in fm.steps" :key="i" class="passo">
          <span class="passo-bolha">
            <Icon v-if="p.icon" :name="p.icon" />
            <span v-else class="passo-n">{{ i + 1 }}</span>
          </span>
          <span class="passo-titulo" v-html="p.title" />
          <span v-if="p.desc" class="passo-desc" v-html="p.desc" />
        </li>
      </ol>
    </div>
  </Moldura>
</template>

<style scoped>
.passos { position: relative; }

.passos-linha {
  position: absolute;
  top: 1.6rem;
  left: 8%;
  right: 8%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    var(--linha-forte) 0 10px,
    transparent 10px 18px
  );
  animation-delay: 60ms;
}

.passos-lista {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 1.2rem;
}

.passo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.passo-bolha {
  display: grid;
  place-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: var(--superficie);
  border: 2px solid var(--acento);
  color: var(--acento);
  font-size: 1.6rem;
  box-shadow: var(--sombra);
}

.passo-n {
  font-family: var(--fonte-mono);
  font-size: 1.4rem;
  font-weight: 600;
}

.passo-titulo {
  font-family: var(--fonte-titulo);
  font-size: var(--t-sub);
  font-weight: 700;
  line-height: 1.15;
}

.passo-desc {
  font-size: var(--t-aux);
  line-height: 1.35;
  color: var(--frente-2);
  max-width: 26ch;
}
</style>
