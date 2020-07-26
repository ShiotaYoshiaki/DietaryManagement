// リストに入っている要素を削除するボタン
<template>
  <view>
    <nb-button class="delete_button" :on-press="deleteElement">
      <text class="delete_mark">×</text>
    </nb-button>
  </view>
</template>

<script>
export default {
  props: {
    recipeMessage: {
      type: String,
    },
  },
  methods: {
    deleteElement(e) {
      console.log("======");
    }
  }
};
</script>

<style modules>

</style>