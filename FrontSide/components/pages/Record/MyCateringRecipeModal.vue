<template>
  <view>
    <view class="top">
      <view class="serchbox">
        <text-input v-model="keyword" />
      </view>
      <view class="serch">
        <nb-button :on-press="searchFunc">
          <text>検索</text>
        </nb-button>
      </view>
      <view class="sort">
        <nb-button :on-press="changeSort">
          <MaterialIcons name="sort" size="40" color="black" />
        </nb-button>
      </view>
    </view>
    <view class="main">
      <view class="list" v-for="cook in cooks" :key="cook.key">
        <view class="my_list">
          <text>{{ cook.message }}</text>
        </view>
        <view class="serving">
          <text-input v-model="number" type="number" />
          <text>人前</text>
        </view>
        <view class="checkBox">
          <nb-checkbox :checked="cook.checked" :on-press="() => (cook.checked = !cook.checked)"></nb-checkbox>
        </view>
        <view class="look_nutrition">
          <nb-button :on-press="look_nutritionFunc">
            <text>栄養素を見る</text>
          </nb-button>
        </view>
      </view>
    </view>
    <view class="last">
      <view class="add_menu">
        <nb-button :onPress="() => this.props.navigation.goBack()">
          <text>献立に追加</text>
        </nb-button>
      </view>
    </view>
  </view>
</template>

<script>
import { MaterialIcons } from "@expo/vector-icons";
import store from "../../../store/index";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      number: "0",
      check_box: "",
    };
  },
  components: {
    MaterialIcons,
  },
  props: {
    open_func: {
      type: Function,
    },
  },
  computed: {
    AddRecipe() {
      return store.state.EMPTY_RECIPE;
    },
    cooks() {
      return store.state.MyRecipe;
    },
    keyword: {
      get() {
        return store.state.keyword;
      },
      set(value) {
        return store.dispatch("UpdateKeyword", value);
      },
    },
  },
  methods: {
    ...mapActions(["searchFunc","changeSort","sortedCooks","addFunc"]),
    searchFunc(){
      return store.dispatch("searchFunc");
    },
    changeSort(){
      return store.dispatch("changeSort");
    },
    sortedCooks(){
      return store.dispatch("sortedCooks");
    },
    addFunc(){
      return store.dispatch("addFunc");
    },
    look_nutritionFunc() {
      console.log("ここを押すと栄養素一覧は飛びます");
    },
  },
};
</script>

<style modules>
.top {
  background-color: rgb(174, 228, 230);
  flex-direction: row;
  justify-content: center;
  width: 80%;
  align-items: center;
}
.serchbox {
  border-width: 1;
  flex: 5;
}
.serch {
  border-width: 1;
  flex: 1;
  margin-left: 0.5;
}
.sort {
  margin-left: 5;
  border-width: 1;
  flex: 1;
}
.main {
  width: 100%;
  border-width: 1;
  margin-top: 1;
}
.list {
  background-color: rgb(174, 228, 230);
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-bottom-width: 1;
}
.my_list {
  flex: 3;
}
.serving {
  flex: 2;
  flex-direction: row;
}
.checkBox {
  flex: 2;
}
.look_nutrition {
  flex: 2;
}
.last {
  justify-content: flex-end;
  flex-direction: row;
}
.add_menu {
  margin-top: 1;
  width: 25%;
}
</style>
