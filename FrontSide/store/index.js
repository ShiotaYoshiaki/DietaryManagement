import Vue from 'vue-native-core'
import Vuex from 'vuex'
import messages from './modules/messages'
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import states from "./states"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages
  },
  states,
  getters,
  mutations,
  actions,
});
