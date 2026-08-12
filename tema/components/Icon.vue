<script setup>
import { Icon as Iconify, addCollection } from '@iconify/vue'
import lucide from '@iconify-json/lucide/icons.json'

// A coleção inteira vai no bundle: os ícones precisam aparecer no PDF exportado
// e numa sala sem internet, então nada de buscar na API do Iconify em runtime.
addCollection(lucide)

defineProps({
  name: { type: String, required: true },  // ex.: "lucide:telescope"
  size: { type: String, default: '1em' },
})
</script>

<template>
  <Iconify :icon="name" :width="size" :height="size" class="q-icon" />
</template>

<style scoped>
.q-icon {
  display: inline-block;
  vertical-align: -0.125em;
  flex: none;
}
</style>
