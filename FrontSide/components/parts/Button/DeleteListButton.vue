<template>
  <nb-button danger bordered :on-press="deleteListItem">
    <nb-icon active name="trash"  />
  </nb-button>
</template>

<script>
export default {
  methods: {
    deleteListItem() {
      this.$emit("deleteItem");
    },
  },
};
</script>

<style module>

</style>