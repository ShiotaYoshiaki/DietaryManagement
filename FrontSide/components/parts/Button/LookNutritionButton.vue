// マイ自炊セット登録の「栄養素を見る」ボタン
<template>
  <view>
    <nb-button block bordered :on-press="addMenuFunc">
      <text>栄養素を見る</text>
    </nb-button>
  </view>
</template>

<script>
export default {
  methods: {
      addMenuFunc: function () {
      return  alert("このボタンが押されたときに献立に追加します");
      },
    },
};
</script>

<style modules></style>
