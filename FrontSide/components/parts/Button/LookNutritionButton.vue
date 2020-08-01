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
      addMenuFunc: () => {
      return  alert("このボタンが押されたときに栄養素画面に移動します");
      },
    },
};
</script>
