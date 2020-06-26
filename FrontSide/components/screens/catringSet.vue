<template>
  <view>
    <seachBox></seachBox>
    <LookNutrition></LookNutrition>
    <serving></serving>
    <checkBoxed></checkBoxed>
    <addmenu></addmenu>
    <mylist></mylist>
  </view>
</template>

<script>
import seachBox from "../parts/searchBox";
import LookNutrition from "../parts/LookNutrition/LookNutrition";
import serving from "../parts/serving";
import checkBoxed from "../parts/checkBox/checkBoxed";
import addmenu from "../parts/addmenu";
import mylist from "../parts/mylist";


export default {
  components: {
    seachBox,
    LookNutrition,
    serving,
    checkBoxed,
    addmenu,
    mylist,
  },
};
</script>
