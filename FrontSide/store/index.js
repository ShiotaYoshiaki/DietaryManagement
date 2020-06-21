import Vue from 'vue-native-core';
import Vuex from 'vuex';
import messages from './modules/messages';
import { VueNativeBase } from "native-base";
// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages
  }
});

new Vue({
  VueNativeBase,
  render: h => h(App),
}).$mount('#app')
