<template>
  <view class="container">
    <text class="heading">Nutrients</text>
    <text>This is the App Nutrients screen</text>
    <test></test>
  </view>
</template>

<script>
import test from "../parts/test";
export default {
  components: {
    test,
  },
};
</script>
<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
</style>
