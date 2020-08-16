<template class="container">
  <scroll-view>
    <content />
  </scroll-view>
</template>

<script>
import NewSelfRecipeContent from "../NewSelfRecipeContent"
export default {
  components: {
    content:NewSelfRecipeContent
  }
}
</script>

<style>
.container{
  text-align: center;
}
</style>