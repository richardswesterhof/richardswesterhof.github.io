import { createStore } from 'vuex';
import api from '@/http-requests/api.js'
// const api = require('@/http-requests/api.js');


export default createStore({
  state: {
    language: null,
    strings: {},
  },

  mutations: {
    // I prefer to use an object for the second parameter,
    // since it will be more consistent with other mutations with multiple parameters,
    // and because it is, in my opinion, clearer to see what the meaning of the parameters is
    setLanguage(state, updated) {
      state.language = updated.language;
    },

    setLanguagePack(state, updated) {
      state.strings = updated.strings;
    }
  },

  actions: {
    async changeLanguagePack(context, updated) {
      let apiResult = await api.getLanguagePack(updated.language);
      console.debug(apiResult);
      // TODO: make this a toast to be more user friendly
      if(apiResult.status !== 200) console.error("Language could not be updated");
      context.commit("setLanguage", {language: updated.language});
      context.commit("setLanguagePack", {strings: apiResult.data});
    }
  },

  modules: {
  }
});
