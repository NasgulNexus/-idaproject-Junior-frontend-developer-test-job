import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: []
  },
  mutations,
  actions,
  getters
});

export default store;
