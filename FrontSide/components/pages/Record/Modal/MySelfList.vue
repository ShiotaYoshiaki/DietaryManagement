<template>
  <view>
    <CateringSetList :open_func="open_func" />
  </view>
</template>
<script>
import CateringSetList from "../CateringSetList";
export default {
  components: {
    CateringSetList,
  },
  props: {
    open_func: {
      type: Function,
    },  
  },
};
</script>
<style scoped></style>
