<template>
  <view class="container">
    <text class="heading">Record</text>
    <text>This is the App Record screen</text>
    <Table />
  </view>
</template>

<script>
import Table from "../pages/Record/Table";

export default {
  components: { Table },
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
