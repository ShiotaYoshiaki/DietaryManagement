<template>
  <view>
    <nb-button :on-press="changeSort" class="sort_button">
      <text>ソート  </text>
    </nb-button>
  </view>
</template>
<script>
export default {
  methods: {
    changeSort() {
      this.$emit("changeCooks");
    },
  },
};
</script>
<style modules>
  .sort_button{
    margin-left: 30;
    height: 25;
  }
</style>