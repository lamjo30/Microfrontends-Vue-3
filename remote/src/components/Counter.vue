<script setup lang="ts">
import { useStore } from "vuex";

const props = defineProps([
  'name'
])
const store = useStore();
const aumentar = (() => {
  store.commit("increment");  
})
</script>
<template>
  <section>
    <h1>
      {{ props.name }}
    </h1>
    <button class="rounded bg-yellow-600 text-xl text-white " @click="aumentar">pepe</button>
  </section>
</template>
