<template>
  <view>
    <nb-checkbox 
      :checked="confirms" 
      :onPress="changeCheckbox" 
      class="checkbox"
    > 
    </nb-checkbox>
    <nb-checkbox
      :checked="confirms2"
      :onPress="changeCheckbox2"
      class="checkbox"
    >
    </nb-checkbox>
    <nb-checkbox
      :checked="confirms3"
      :onPress="changeCheckbox3"
      class="checkbox"
    >
    </nb-checkbox>
    <nb-checkbox
      :checked="confirms4"
      :onPress="changeCheckbox4"
      class="checkbox"
    >
    </nb-checkbox>
    <nb-checkbox
      :checked="confirms5"
      :onPress="changeCheckbox5"
      class="checkbox"
    >
    </nb-checkbox>
    <!-- ここから献立に追加 -->
    <nb-button block bordered :on-press="addMenuFunc">
      <text>献立に追加</text>
    </nb-button>
    <text>{{ ary }}</text>
    <!-- ここからsortを書きます -->

  </view>
</template>

<script>
import checkboxedChild from "./checkboxedChild";
export default {
  components: {
    checkboxedChild,
  },
  data() {
    return {
      confirms: false,
      confirms2: false,
      confirms3: false,
      confirms4: false,
      confirms5: false,
      ary: [],  
    };
  },
  methods: {
    changeCheckbox: function () {
      this.confirms = !this.confirms;
    },
    changeCheckbox2: function () {
      this.confirms2 = !this.confirms2;
    },
    changeCheckbox3: function () {
      this.confirms3 = !this.confirms3;
    },
    changeCheckbox4: function () {
      this.confirms4 = !this.confirms4;
    },
    changeCheckbox5: function () {
      this.confirms5 = !this.confirms5;
    },
    addMenuFunc: function () {
      this.ary.push(this.confirms);
      this.ary.push(this.confirms2);
      this.ary.push(this.confirms3);
      this.ary.push(this.confirms4);
      this.ary.push(this.confirms5);

    },
  },
};
</script>
<style scoped>
.checkbox {
  background-color: rgb(108, 202, 187);
  transform: scale(1.4);
  margin: 10;
}
</style>
