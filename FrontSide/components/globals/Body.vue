<template>
  <view class="container">
    <text class="text-color-primary">div Vue Native App</text>
    <Footer />
  </view>
</template>

<script>
import Footer from "./Footer";

export default {
  components: { Footer }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
