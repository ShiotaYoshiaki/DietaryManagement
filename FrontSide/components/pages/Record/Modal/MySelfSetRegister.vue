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
        :style="stylesObj.listItem"
      >
        <nb-body class="flexbox" v-if="recipe.bool">
          <MenuListItem 
            :recipeMessage="recipe.message"
            :style="stylesObj.menuName"
          />
          <DeleteListButton
            :recipe="recipe"
            @deleteItem="deleteItemFunc"
            :style="stylesObj.deleteButton"
          />
        </nb-body>
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
import { Content } from 'native-base';

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
        menuName: {
          width: 220,
          paddingLeft: 2,
          marginLeft: 2,
        },
        deleteButton: {
          width: 48,
        },
      },
    };
  },
  methods: {
    deleteItemFunc(recipe) {
      this.menu.find((m) => m.key === recipe.key).bool = !this.menu.find((m) => m.key === recipe.key).bool;
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
