import { createStore } from 'vuex'

export default createStore({
  state: {
    language: null,
    strings: {},
  },

  mutations: {
    // we prefer to use an object for the second parameter,
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
    changeLanguagePack(context, updated) {
      let language = updated.language;
      let langPack = {}
      context.commit("setLanguage", {language: language});
      context.commit("setLanguagePack", {strings: langPack});
    }
  },

  modules: {
  }
})
