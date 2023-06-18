<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
function increment () {
 count.value++
}
</script>
<template>
  <section>
    <h4>{{ count }}</h4>
    <button class="rounded bg-yellow-600 text-xl text-white " @click="increment">Aumentar</button>
  </section>
</template>
