<template>
  <view class="container">
    <text class="heading">Home</text>
    <text>This is the App Home screen</text>
    <seachBox></seachBox>
  </view>
</template>
<script>
  import seachBox from "../parts/searchBox";
  export default {
    components:{seachBox}
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
