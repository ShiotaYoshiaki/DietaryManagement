<template>
  <view>
    <nb-button small>
      <text>ソートで変更</text>
    </nb-button>
    <text>{{Mylist}}</text>
    <!-- <text>{{ sortArry }}</text> -->
  </view>
</template>
<script>
export default {
  // props:[Mylist],
  data: () => {
    return {
      /**
       * mylistAryにmylistを配列で格納します。
       */
      mylistAry: [],
      /**
       * さらにmylistAry[0]の中を配列に格納します。
       */
      sortArry: [],
    };
  },
  methods: {
    SortArryFunc: function () {
      this.mylistAry.push(this.cooks);
      this.mylistAry[0].forEach((element) => {
        this.sortArry.push(element);
      });
      this.sortArry.sort();
    },
  },
};
</script>