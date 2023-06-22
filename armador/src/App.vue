<template>
  <section class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: armador</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <h1>Check</h1>
    <h1>{{ count }}</h1>
    <Counter :name="name" />
    <button @click="aumentar">aumentar</button>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Counter from "remote/Counter";
import { computed } from "vue";
import { useStore } from "vuex";

const name = ref("Manuel");
const store = useStore();
const count = computed(() => store.state.count);
const aumentar = () => {
  store.commit("increment");
};
</script>
