<template>
  <view>
    <seachBox></seachBox>
    <LookNutrition></LookNutrition>
    <serving></serving>
  </view>
</template>

<script>
import seachBox from "../parts/searchBox";
import LookNutrition from "../parts/LookNutrition/LookNutrition";
import serving from "../parts/serving";
export default {
  components: {
    seachBox,
    LookNutrition,
    serving,
  },
};
</script>