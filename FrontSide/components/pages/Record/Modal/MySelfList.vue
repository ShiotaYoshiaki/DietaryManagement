<template>
  <view>
    <nb-text>マイ自炊レシピです</nb-text>
    <MyCateringRecipeModal :open_func="open_func" :testRecord="testRecord" />
  </view>
</template>
<script>
import MyCateringRecipeModal from "../MyCateringRecipeModal";
export default {
  components: {
    MyCateringRecipeModal,
  },
  props: {
    open_func: {
      type: Function,
    },
    testRecord: {
      type: Array,
    },
  },
};
</script>
