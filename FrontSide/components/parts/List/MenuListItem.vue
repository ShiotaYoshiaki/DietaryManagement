<template>
  <nb-body>
    <nb-text>
      {{ recipeMessage }}
    </nb-text>
  </nb-body>
</template>

<script>
export default {
  props: {
    recipeMessage: {
      type: String,
    },
  },
};
</script>