// マイ自炊セット登録の「栄養素を見る」ボタン
<template>
  <nb-button block bordered dark :on-press="addMenuFunc">
    <nb-text :style="stylesObj.buttonMessage">栄養素を見る</nb-text>
  </nb-button>
</template>

<script>
export default {
  data: () => {
    return {
      stylesObj: {
        buttonMessage: {
          fontSize: 14,
        }
      },
    };
  },
  methods: {
    addMenuFunc: () => {
      return alert("このボタンが押されたときに栄養素画面に移動します");
    },
  },
};
</script>
