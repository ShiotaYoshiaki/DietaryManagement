// マイ自炊セット登録の献立リストの部品
<template>
  <view class="menu_list_all">
    <view class="list_title">
      <text>献立リスト</text>
    </view>
    <view v-for="recipe in menu" :key="recipe.key">
      <nb-text class="recipe">{{ recipe.message }}</nb-text>
      <DeleteListButton :recipe="recipe"></DeleteListButton>
    </view>
  </view>
</template>

<script>
import DeleteListButton from "../Button/DeleteListButton";
export default {
  props: {
    menu: {
      type: Array,
    },
  },
};
</script>

<style modules>
.recipe {
  font-size: 12;
}
</style>
