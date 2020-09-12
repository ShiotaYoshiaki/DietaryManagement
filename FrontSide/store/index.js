import Vue from "vue-native-core";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    keyword: "",
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
    MyRecipe: [
      {
        key: 1,
        message: "野菜炒め",
        checked: true,
      },
      {
        key: 2,
        message: "カレーライス",
        checked: true,
      },
      {
        key: 3,
        message: "焼きそば",
        checked: true,
      },
      {
        key: 4,
        message: "チャーハン",
        checked: true,
      },
      {
        key: 5,
        message: "麻婆豆腐",
        checked: true,
      },
    ],
  },
  mutations,
  actions,
});

export default store;
