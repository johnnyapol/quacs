import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit("sections/initializeStore");
  },
  mounted() {
    this.$store.dispatch("loadCourseSizes");
  }
}).$mount("#app");