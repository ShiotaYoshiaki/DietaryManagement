<template>
  <view>
    <view v-for="cook in cooks" :key="cook.key">
      <nb-text class="message_size">{{ cook.message }}</nb-text>
    </view>
  </view>
</template>
<script>
import sort from "./sort";
export default {
  props: {
    cooks: {
      type: Array,
    },
  },
  components: {
    sort,
  },
};
</script>

<style modules>
.margin {
  margin-top: 20;
  font-size: 7;
  border-width: 3;
  color: black;
}
.sort_button {
  width: 35%;
  height: 20px;
  position: absolute;
  top: -30;
  right: 0;
}
.sort_container {
  background-color: red;
  position: relative;
}
.message_size{
  font-size: 12;
}
</style>
