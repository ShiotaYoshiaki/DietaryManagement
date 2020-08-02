<template>
  <view>
    <text>{{message}}</text>
  </view>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message;
    }
  }
}
</script>

<style>

</style>