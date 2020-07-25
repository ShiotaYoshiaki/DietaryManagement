<template>
  <view>
    <nb-text>MyselfList</nb-text>
    <MyCateringListModal :open_func="open_func" :testRecord="testRecord" />
  </view>
</template>
<script>
import MyCateringListModal from "../MyCateringListModal";
export default {
  components: {
    MyCateringListModal,
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
