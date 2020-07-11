// マイ自炊セット登録の献立リストの部品
<template>
  <view>
    <view v-for="recipe in menu" :key="recipe.key">
      <nb-text class="recipe">{{ recipe.message }}</nb-text>
    </view>
  </view>
</template>

<script>
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
