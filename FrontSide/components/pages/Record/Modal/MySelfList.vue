<template>
  <view>
    <CateringSetList :open_func="open_func" :testRecord="testRecord" />
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
    testRecord: {
      type: Array,
    },
  },
};
</script>
<style scoped></style>
