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
      type: Object,
    },
  },
  methods: {
    deleteElement: (e) => {
      return  alert("このボタンが押されたときにこのメニューが削除されます。");
    },
  }
};
</script>
