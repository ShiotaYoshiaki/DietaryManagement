// マイ自炊セット登録の「登録」ボタン
<template>
  <nb-button block bordered dark :on-press="() => addMenuFunc">
    <nb-text :style="stylesObj.buttonMessage">マイ自炊セットに登録</nb-text>
  </nb-button>
</template>

<script>
export default {
  data: () => {
    return {
      stylesObj: {
        buttonMessage: {
          fontSize: 13,
          paddingLeft: 0,
          paddingRight: 0,
        }
      },
    };
  },
  methods: {
    addMenuFunc: () => {
      return alert("このボタンが押されたときにマイ自炊セットに登録します");
    },
  },
};
</script>
