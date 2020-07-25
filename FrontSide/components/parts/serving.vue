<template>
  <view>
    <view v-for="serve in serving" :key="serve">
      <text-input class="serving_style" type="number">{{ serve.servingNumber }}</text-input>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      serving: [
        {
          servingNumber: 0,
        },
        {
          servingNumber: 0,
        },
        {
          servingNumber: 0,
        },
        {
          servingNumber: 0,
        },
        {
          servingNumber: 0,
        },
      ],
    };
  },
};
</script>
<style scoped>
  .serving_style{
    margin-top: 22;
    font-size: 20;
  }
</style>
