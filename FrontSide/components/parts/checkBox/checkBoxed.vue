<template>
  <view>
    <view class="container">
      <nb-checkbox
        v-for="(list, index) in confirmedList"
        :key="index"
        :checked="list.confirmed"
        :onPress="() => changeCheckbox(index)"
        class="checkboxStyle"
      >
      </nb-checkbox>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    confirmedList: {
      type: Array,
    },
  },
  methods: {
    changeCheckbox: function (i) {
      this.confirmedList[i].confirmed = !this.confirmedList[i].confirmed;
    },
    addMenuFunc: function () {
      this.confirmedList.forEach((element) => {
        this.ary.push(element.confirmed);
      });
    },
  },
};
</script>
<style scoped>
.checkboxStyle {
  background-color: rgb(108, 202, 187);
}
</style>
