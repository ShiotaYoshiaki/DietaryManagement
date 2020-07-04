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

    <!-- ここから献立に追加 -->
    <nb-button block bordered :on-press="addMenuFunc">
      <text>献立に追加</text>
    </nb-button>
    <text>{{ ary }}</text>
  </view>
</template>

<script>
export default {
  props: {
    confirmedList: {
      type: Array,
    },
  },
  data() {
    return {
      /**
       * checkボックス内の値を確認
       */
      ary: [],
    };
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
  /* transform: scale(1.4); */
  /* margin: 5; */
}
</style>
