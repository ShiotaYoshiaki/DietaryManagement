<template>
  <view class="container">
    <text class="text-color-primary">メールアドレス</text>
    <textInput type="text" v-model="email" />
    <text class="text-color-primary">パスワード</text>
    <textInput type="text" v-model="pass" />
    <nb-button v-if="!ableToLogin" class="login-button" :onPress="login">
      <text>ログイン</text>
    </nb-button>
    <text v-if="ableToLogin">ログイン成功</text>
  </view>
</template>

<script>
import axios from "axios";

export default {
  data: () => {
    return {
      email: "test",
      pass: "test",
      ableToLogin: false,
    };
  },
  methods: {
    login() {
      const url = `http://localhost:3100/api/account/login/${this.email}/${this.pass}`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          this.ableToLogin = response.data.conform;
        })
        .catch((error) => {
          this.ableToLogin = "failed to access at dynamo db";
        })
        .finally(() => (this.loading = false));
    },
  },
  styleObject: {
    color: "red",
    fontSize: "13px",
  },
};
</script>

<style>
.text-color-primary {
  color: blue;
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
}

.login-button {
  margin-top: 30px;
}
</style>
