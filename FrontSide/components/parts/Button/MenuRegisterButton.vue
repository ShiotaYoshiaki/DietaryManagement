// マイ自炊セット登録の「登録」ボタン
<template>
  <view>
    <nb-button block bordered :on-press="addMenuFunc">
      <text>マイ自炊セットに登録</text>
    </nb-button>
  </view>
</template>

<script>
export default {
  methods: {
      addMenuFunc: () => {
      return  alert("このボタンが押されたときにマイ自炊セットに登録します");
      },
    },
};
</script>

