<template>
  <view>
    <nb-button class="small-box">
      <text class="small-font">栄養素を見る</text>
    </nb-button>
    <textInput v-model="numberParam"/>
  </view>
</template>
<script>
import LookNutritionList from "../../../constants/LookNutritionList"
export default {
  data: () => {
    return {
      numberParam: "0",
      LookNutritionList:LookNutritionList,
    };
  },
  methods: {
    numberParam:function() {
     alert("栄養素一覧に飛ぶ予定");
    },
  },
};
</script>

<style modules>
view {
  color: blue;
}
.lookNutrition {
  color: rgb(167, 110, 110);
  font-size: 10px;
}
.small-box{
  height: 40;
  width:30;
}
.small-font{
  font-size: 8;
}
</style>
