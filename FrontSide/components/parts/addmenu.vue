<template>
  <nb-button block bordered  :on-press="addMenuFunc" >
    <text>献立に追加</text>
  </nb-button>
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
