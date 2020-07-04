<template>
  <view>
    <view class="sort_container">
      <seachBox></seachBox>
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
// import { cateringSet } from "../../constants/catering";

export default {
  components: {
    seachBox,
    LookNutrition,
    serving,
    checkBoxed,
    addmenu,
    mylist,
    sort,
    // cateringSet
  },
  data: () => {
    return {
      cooks: Mylist,
      confirmedList: [
        {
          confirmed: false,
        },
        {
          confirmed: false,
        },

        {
          confirmed: false,
        },
        {
          confirmed: false,
        },
        {
          confirmed: false,
        },
      ],
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
      this.$emit("toCateringSet");
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
