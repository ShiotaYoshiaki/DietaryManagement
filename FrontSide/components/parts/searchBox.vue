<template>
  <view class="seachBox">
    <TextInput
      placeholder="検索欄"
      v-model="keyword"
      :onChange="keywordFunc"
    />
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
      this.$emit("serchFunc");
    },
  },
};
</script>
<style modules>
.seachBox {
  width: 50%;
  height: 30;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}
</style>
