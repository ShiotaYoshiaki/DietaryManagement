<template>
  <nb-view class="container">
    <nb-text>確認メールに記載のワンタイムパスワード</nb-text>
    <nb-text class="text_center">を入力してください</nb-text>
    <nb-view>
      <nb-input class="onetime_pass" placeholder="キーワードを入力" type="text">
      </nb-input>
    </nb-view>
    <nb-view>
      <nb-button class="confirm_button">
        <nb-text class="confirm_text">確定</nb-text>
      </nb-button>
    </nb-view>
  </nb-view>
</template>

<style>
.container {
  background-color: red;
  width: 300px;
  margin-top: 200px;
  margin-bottom: 200px;
  margin-right: 50px;
  margin-left: 40px;
}

.text_center {
  text-align: center;
}

.onetime_pass {
  text-align: center;
  background-color: blue;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
}

.confirm_button {
  background-color: blueviolet;
  width: 60px;
  margin-left: 170px;
}

.confirm_text {
  color: black;
}

</style>

