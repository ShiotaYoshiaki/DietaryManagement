<template>
  <view>
    <nb-text>マイ自炊レシピです</nb-text>
    <MyCateringRecipeModal :navigation="navigation"/>
  </view>
</template>
<script>
import MyCateringRecipeModal from "../MyCateringRecipeModal";
export default {
  components: {
    MyCateringRecipeModal,
  },
  props: {
    navigation: {
      type: Object
    }
  },
};
</script>
<style scoped>
</style>