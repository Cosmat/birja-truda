import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import auth from "./auth";
import requests from "./requests";
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
      auth,
      requests,
    },
    state() {
      return {
        message: null,
      };
    },
    mutations: {
      setMessage(state, message) {
        state.message = message;
      },
      clearMessage(state) {
        state.message = null;
      },
    },

    actions: {
      setMessage({ commit }, message) {
        commit("setMessage", message);
        setTimeout(() => {
          commit("clearMessage");
        }, 4000);
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
