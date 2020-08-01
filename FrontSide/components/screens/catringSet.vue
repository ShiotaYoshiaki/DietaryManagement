<template>
  <view>
    <view class="sort_container">
      <seachBox
        :cooks="cooks"
        :test="test"
        :keyword="keyword"
<<<<<<< HEAD
        :changeKeyword="changeKeyword"
=======
>>>>>>> develop
        @serchFunc="changelist"
      ></seachBox>
      <sort @changeCooks="ChangedCooks"></sort>
    </view>
    <view class="mylist_container">
      <mylist :cooks="cooks"></mylist>
      <serving class="test"></serving>
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
      keyword: "",
      test: [],
    };
  },
  methods: {
     changeKeyword(e) {
       console.log(e);
      this.keyword = e.nativeEvent.text;
    },
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
      const searched = this.cooks.filter((cook) => {
        const indexNum = cook.message.indexOf(this.keyword);
        console.log(indexNum);
        return indexNum !== -1;
      });
      console.log(searched);
      console.log(this.cooks);
      this.cooks = searched;
    },
  },
};
</script>
<style scoped>
.mylist_container {
  flex-direction: row;
  align-items: center;
}
.sort_container {
  align-items: center;
  flex-direction: row;
  width: 100%;
}
</style>
