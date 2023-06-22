import { createApp } from "vue";
import { createStore } from "vuex";

import "./index.scss";
import App from "./App.vue";
import router from "./router";
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


// Make sure to _use_ the router instance to make the
// whole app router-aware.

createApp(App).use(store).use(router).mount("#app");
