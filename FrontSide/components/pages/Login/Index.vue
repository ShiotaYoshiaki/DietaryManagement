<template>

<view class="container">

<text class="text-color-primary">メールアドレス</text>
<textInput type="text" v-model="textInput1"/>

<text class="text-color-primary">パスワード</text>
<textInput type="text" v-model="textInput2"/>

<nb-button>
          <text>ログイン</text>
</nb-button>



</view>
</template>

<style>
.text-color-primary {
  color: blue;

}
</style>

<script>
export default {
  data: function() {
    return {
      textInput1: '入力',
      textInput2: '入力',
    }
  },
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
</script>
