<template>
  <view>
    <view class="sort_container">
      <seachBox
        :cooks="cooks"
        :test="test"
        :keyword="keyword"
        @serchFunc="changelist"
      ></seachBox>
      <sort @changeCooks="ChangedCooks"></sort>
    </view>
    <view class="mylist_container">
      <mylist :cooks="cooks"></mylist>
      <serving></serving>
      <LookNutrition></LookNutrition>
      <checkBoxed :confirmedList="confirmedList"></checkBoxed>
    </view>
    <addmenu></addmenu>
  </view>
</template>
<script>
import seachBox from "../parts/searchBox";
import LookNutrition from "../parts/LookNutrition/LookNutrition";
import serving from "../parts/serving";
import checkBoxed from "../parts/checkBox/checkBoxed";
import addmenu from "../parts/addmenu";
import mylist from "../parts/mylist";
import sort from "../parts/sort";
import { Mylist } from "../../constants/MyList";
import { confirmedList } from "../../constants/ConfirmedList";

export default {
  components: {
    seachBox,
    LookNutrition,
    serving,
    checkBoxed,
    addmenu,
    mylist,
    sort,
  },
  data: () => {
    return {
      cooks: Mylist,
      confirmedList: confirmedList,
      keyword: " ",
      test: [],
    };
  },
  methods: {
    ChangedCooks() {
      const sorted = this.cooks.map((cook) => cook.message);
      sorted.sort();
      const nextcooks = sorted.map((param) => {
        return this.cooks.find((cook) => {
          return cook.message === param;
        });
      });
      this.cooks = nextcooks;
    },
    changelist() {
      const messagelist = this.cooks.map((value) => {
        const list = value.message;
        return list;
      });
      let cooksList = messagelist.indexOf(this.keyword);
      if (cooksList == -1) {
        const changeNextCooks = messagelist.map((param) => {
          return this.cooks.find((cook) => {
            return cook.message === param;
          });
          this.cooks = changeNextCooks;
        });
      }
      // alert("----");
    },
  },
};
</script>
<style scoped>
.mylist_container {
  flex-direction: row;
  padding-top: 20px;
}
.sort_container {
  flex-direction: row;
}
</style>
