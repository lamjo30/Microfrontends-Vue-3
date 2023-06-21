<script setup lang="ts">
import { ref } from 'vue';
const counter = ref(0)

function aumentar () {
 counter.value++
}
</script>
<template>
 <section>
  <div>{{ counter }}</div>
  <button @click="aumentar">Agregar</button>
 </section>
</template>
