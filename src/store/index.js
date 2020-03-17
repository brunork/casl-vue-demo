import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dynamicBackground: '',
    user: {
      username: '',
      role: '',
    }
  },
  mutations: {
    SET_DYNAMIC_BACKGROUND: (state, payload) => {
      state.dynamicBackground = payload;
    },
    SET_USER_ROLE: (state, payload) => {
      state.user.role = payload;
    },
  },
  actions: {},
  modules: {}
});
