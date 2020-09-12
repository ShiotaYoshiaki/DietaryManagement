import Vue from "vue-native-core";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: "hh",
    EMPTY_RECIPE: [
      {
        key: "i_1",
        message: "test1",
        bool: true,
      },
      {
        key: "i_2",
        message: "test2",
        bool: true,
      },
      {
        key: "i_3",
        message: "test3",
        bool: true,
      },
      {
        key: "i_4",
        message: "test4",
        bool: true,
      },
      {
        key: "i_5",
        message: "test5",
        bool: true,
      },
    ],
  },
  mutations,
  actions,
});

export default store;
