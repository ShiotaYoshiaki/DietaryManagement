<template>
  <nb-view class="container">
    <nb-text>確認メールに記載のワンタイムパスワード</nb-text>
    <nb-text class="text_center">を入力してください</nb-text>
    <nb-view class="L_pass">
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
  width: 300px;
  margin-top: 150px;
  margin-bottom: 200px;
  margin-right: 50px;
  margin-left: 40px;
  padding-top:30px;
  padding-bottom:30px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

.text_center {
  text-align: center;
}

.L_pass {
  height: 130px;
}

.onetime_pass {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

.confirm_button {
  width: 65px;
  margin-left: 190px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

.confirm_text {
  color: black;
}

</style>

