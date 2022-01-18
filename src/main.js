import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import store from "./vuex/store";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
