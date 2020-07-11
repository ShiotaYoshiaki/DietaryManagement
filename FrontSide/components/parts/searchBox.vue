<template>
  <view class="seachBox">
    <text-input placeholder="検索欄" v-model="keyword" class="text_input" />
    <touchable-opacity class="serchBox_button" :on-press="keywordFunc"
      ><text class="button_text">検索</text></touchable-opacity
    >
  </view>
</template>
<script>
export default {
  props: {
    cooks: {
      type: Array,
    },
    test: {
      type: Array,
    },
    keyword: {
      type: String,
      default: "dafault",
    },
  },
  methods: {
    keywordFunc() {
      alert("-------");
      this.$emit("serchFunc");
    },
  },
};
</script>
<style modules>
.seachBox {
  flex-direction: row;
  width: 70%;
  border-width: 1px;
}
.serchBox_button {
  background-color: #008080;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.text_input {
  background-color: white;
  margin-right: 5px;
  flex: 3;

  width: 100%;
}
.button_text {
  color: white;
  font-weight: normal;
}
</style>
