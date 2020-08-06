<template>
  <view>
    <nb-container>
      <view :style="styleObj.textContainer">
        <view :style="styleObj.textContainer">
          <nb-text class="textStyle" :style="styleObj.text">テスト表示</nb-text>
        </view>
        <view class="textStyleContainer">
          <nb-text class="textStyle">classテスト表示</nb-text>
        </view>
      </view>
    </nb-container>
    <nb-left>
      <view :style="styleObj.textContainer">
        <text class="textStyle" :style="styleObj.text">leftテスト表示</text>
      </view>
    </nb-left>
  </view>
</template>

<script>
export default {
  data() {
    return {
      styleObj: {
        text: {
          color: "white",
          lineHeight: 50,
        },
        textContainer: {
          width: 100,
          backgroundColor: "red",
        },
      },
    };
  },
};
</script>

<style>
.textStyle {
  color: white;
}
.textStyleContainer {
  width: 100;
  background-color: red;
}
</style>