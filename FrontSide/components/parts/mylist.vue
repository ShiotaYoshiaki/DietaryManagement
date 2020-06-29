<template>
  <view>
    <view class="sort_container">
      <nb-button :on-press="SortArryFunc" class="sort_button">
        <text>ソートで変更</text>
      </nb-button>
    </view>
    <view v-for="cook in cooks" :key="cook.key">
      <nb-text>{{ cook.message }}</nb-text>
    </view>
  </view>
</template>
<script>
import { Mylist } from "../../constants/MyList";
import sort from "./sort";
export default {
  data: () => {
    return {
      cooks: Mylist,
    };
  },
  methods: {
    SortArryFunc: function () {
      const sorted = this.cooks.map((cook) => cook.message);
      sorted.sort();
      const nextCooks = sorted.map((param) => {
        return this.cooks.find((cook) => {
          return cook.message === param;
        });
      });
      this.cooks = nextCooks;
    },
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
</style>
