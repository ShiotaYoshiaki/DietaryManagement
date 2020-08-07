// マイ自炊セット登録 (作成者 : 田中)
<template>
  <nb-container :style="stylesObj.modalContainer" class="relative">
    <view :style="stylesObj.textbox">
      <MenuNameTextbox />
    </view>
    <nb-list :style="stylesObj.list">
      <nb-list-item
        v-for="recipe in menu"
        :key="recipe.key"
        class="flexbox"
        :style="stylesObj.listItem"
      >
        <MenuListItem 
          :style="{ flex: 4 }"
          :recipeMessage="recipe.message"
        />
        <DeleteListButton
          :style="{ flex: 1 }"
          :recipeBool="recipe.bool"
          @deleteItem="deleteItemFunc"
        />
      </nb-list-item>
    </nb-list>
    <view class="flexbox" :style="stylesObj.twoButton">
      <LookNutritionButton :style="stylesObj.button1" />
      <MenuRegisterButton :style="stylesObj.button2" />
    </view>
  </nb-container>
</template>

<script>
import MenuNameTextbox from "../../../parts/Textbox/MenuNameTextbox";
import MenuListItem from "../../../parts/List/MenuListItem";
import MenuRegisterButton from "../../../parts/Button/MenuRegisterButton";
import LookNutritionButton from "../../../parts/Button/LookNutritionButton";
import DeleteListButton from "../../../parts/Button/DeleteListButton";
import { EMPTY_RECIPE } from "../../../../constants/Records";

export default {
  components: {
    MenuNameTextbox,
    MenuListItem,
    MenuRegisterButton,
    LookNutritionButton,
    DeleteListButton,
  },
  data: () => {
    return {
      menu: EMPTY_RECIPE,
      stylesObj: {
        modalContainer: {
          width: 300,
        },
        textbox: {
          width: 300,
          height: 70,
          marginTop: 10,
        },
        list: {
          width: 300,
          height: 250,
        },
        listItem: {
          width: 270,
          height: 50,
        },
        twoButton: {
          width: 300,
        },
        button1: {
          width: 140,
          marginLeft: 8,
          marginRight: 4,
        },
        button2: {
          width: 140,
        },
      },
    };
  },
  methods: {
    deleteItemFunc() {
      return alert("このボタンが押されたときにマイ自炊セットに登録します");
    },
  },
};
</script>

<style>
.flexbox {
  flex-direction: row;
}

.flex1 {
  flex: 1;
}

.relative {
  position: relative;
}
</style>
