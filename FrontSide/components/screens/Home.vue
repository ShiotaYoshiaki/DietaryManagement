<template>
  <view class="container">
    <text class="heading">Home</text>
    <text>This is the App Home screen</text>
    <text>{{ ableToLogin }}</text>
  </view>
</template>

<script>
import axios from "axios";

const url = 'http://localhost:3100/api/account/login/shiota_yoshiaki/testeeeeeeeeeee';
export default {
  data: () => {
    return {
      ableToLogin: false,
    }
  },
  mounted() {
    axios
      .get(url)
      .then((response) => {
        this.ableToLogin = response.data.conform;
      })
      .catch((error) => {
        this.ableToLogin = 'failed to access at dynamo db';
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
</style>
