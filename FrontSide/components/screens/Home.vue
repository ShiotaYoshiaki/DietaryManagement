<template>
  <view class="container">
    <text class="heading">Home</text>
    <text>This is the App Home screen</text>
    <catringSet></catringSet>
  </view>
</template>
<script>
import catringSet from "./catringSet";
export default {
  components:{
    catringSet,
  }
}
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
