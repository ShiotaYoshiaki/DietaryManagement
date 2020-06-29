<template>
  <view>
    <seachBox></seachBox>
    <view class="mylist_container">
      <mylist></mylist>
      <serving></serving>
      <LookNutrition></LookNutrition>
      <checkBoxed></checkBoxed>
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
// import sort from "../parts/sort"

export default {
  components: {
    seachBox,
    LookNutrition,
    serving,
    checkBoxed,
    addmenu,
    mylist,
    // sort,
  },
};
</script>
<style scoped>
.mylist_container{
   flex-direction: row;
   padding-top: 20px;
}
</style>
