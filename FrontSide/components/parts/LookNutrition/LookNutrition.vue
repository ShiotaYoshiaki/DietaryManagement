<template>
  <view>
    <LookNutritionChild v-slot:toLookNutrition>
      <template>
        <text class="lookNutrition" style={styles.titleText}>栄養素を見る</text>
      </template>
    </LookNutritionChild>
    <textInput :value="textParam" onChange="changeFunc">
  </view>
</template>
<script>
import LookNutritionChild from "./LookNutritionChild";
export default {
  data: () => {
    return {
      textParam: "0",
    };
  },
  methods: {
    changeFunc(e) {
      const inputed = e.target.value;
      if (inputed >= 0 && inputed < 100) {
        this.textParam = inputed;
      }
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

// styleが適応されません
<style modules>
view {
  color: blue;
}
.lookNutrition {
  color: rgb(167, 110, 110);
  font-size: 10px;
}
</style>
