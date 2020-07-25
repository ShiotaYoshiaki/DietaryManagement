<template>
  <view>
<<<<<<< HEAD
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
=======
   <CateringSetList />
  </view>
</template>
<script>
import CateringSetList from "../CateringSetList";
export default {
  components:{
    CateringSetList,
  }
}
>>>>>>> e7576fd... 新しくマイ自炊ｾｯﾄのｺｰﾄﾞを作る
</script>
