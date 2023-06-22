import { createApp } from "vue";
import { createStore } from "vuex";

import "./index.scss";
import App from "./App.vue";
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      console.log("addOne")
      state.count++
    }
  }
})


// Make sure to _use_ the router instance to make the
// whole app router-aware.

createApp(App).use(store).mount("#app");
