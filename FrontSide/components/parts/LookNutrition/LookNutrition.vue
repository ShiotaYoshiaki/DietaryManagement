<template>
  <view>
    <nb-button class="small-box">
      <text class="small-font">栄養素を見る</text>
    </nb-button>
    <textInput v-model="numberParam">
  </view>
</template>
<script>
import LookNutritionChild from "./LookNutritionChild";
export default {
  data: () => {
    return {
      numberParam: "0",
    };
  },
  methods: {
    numberParam:function() {
     alert("----");
    },
    lookNutritionfunc:function(){
      alert("hello");
    }
  },
  components: {
    LookNutritionChild,
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
