<template>
  <section>
    <h1>Check</h1>
    <h1>{{ count }}</h1>
    <Counter :name="name" />
    <!-- <button @click="aumentar">aumentar</button> -->
  </section>
</template>
<script setup lang="ts">
import Counter from "remote/Counter";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const name = ref('Alan')
const store = useStore();
const count = computed(() => store.state.count)
</script> 