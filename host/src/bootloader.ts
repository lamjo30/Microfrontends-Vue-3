import { createApp } from "vue";
import { createStore } from "vuex";

import "./index.scss";

import App from "./App.vue";

createApp(App).mount("#app");
const store = createStore({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      console.log("Icremento");
      state.count++;
    },
  },
});

createApp(App).use(store).mount("#app");
