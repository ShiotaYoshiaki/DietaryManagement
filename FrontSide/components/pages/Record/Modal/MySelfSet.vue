<template>
  <view>
    <text>MySelfSet</text>
    <MyCateringSetModal :open_func="open_func" :testRecord="testRecord" />
  </view>
</template>
<script>
import MyCateringSetModal from "../MyCateringSetModal";
export default {
  components: {
    MyCateringSetModal,
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
