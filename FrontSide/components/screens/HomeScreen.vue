<template>
  <view class="container">
    <text>{{ text }}</text>
    <button :on-press="goMessages" title="Go Messages" />
  </view>
</template>

<script>
export default {
  data: function () {
    return {
      text: "Home",
    };
  },
  props: {
    navigation: {
      type: Object,
    },
  },
  methods: {
    goMessages: function () {
      this.navigation.navigate("Messages");
    },
  },
};
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
