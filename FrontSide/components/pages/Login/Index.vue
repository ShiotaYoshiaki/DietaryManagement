<template>
  <view class="container">
    <text class="text-color-primary">メールアドレス</text>
    <textInput type="text" v-model="e-mailadress"/>
    <text class="text-color-primary">パスワード</text>
    <textInput type="text" v-model="password"/>
    <nb-button class ="login-button">
    <text>ログイン</text>
    </nb-button>
  </view>
</template>

<script>
  export default {
    data: function() {
      return {
        e-mailadress: '入力',
        password: '入力',
      }
    },
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
</script>

<style>
  .text-color-primary {
    color: blue;
    font-size:20px;
    padding-bottom:10px;
    padding-top:10px;
  }
  .login-button{
    margin-top:30px;
  }
</style>
