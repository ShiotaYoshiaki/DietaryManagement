<template>
  <nb-button danger bordered :on-press="deleteListItem">
    <nb-icon active name="trash"  />
  </nb-button>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
    },
  },
  methods: {
    deleteListItem() {
      this.$emit("deleteItem",this.recipe);
    },
  },
};
</script>

<style module>

</style>