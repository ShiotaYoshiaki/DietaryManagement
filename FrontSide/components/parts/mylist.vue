<template>
  <view>
    <text>mylistです</text>
    <view v-for="cook in cooks" :key="cook.key">
      <text>{{ cook.message }}</text>
    </view>
    <nb-button :on-press="SortArryFunc">
        <text>ソートで変更</text>
      </nb-button>
      <!-- <text>{{test}}</text> -->
      <text>{{sortArry}}</text>
  </view>
</template>
<script>
import { Mylist } from "../../constants/MyList";
export default {
  data: () => {
    return {
      cooks: Mylist,
      ary:[],
      sortArry: [],
      test:[],
      
    };
  },
  methods: {
    SortArryFunc: function () {
      this.ary.push(this.cooks);
      this.ary[0].forEach(element => {
        this.sortArry.push(element);
      });
      this.sortArry.sort();
    },
  },
};
</script>
