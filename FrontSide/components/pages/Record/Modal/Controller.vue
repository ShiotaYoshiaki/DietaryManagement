<template>
  <view>
    <view v-if="param === records.NEW_SELF_RECIPE.key">
      <NewMySelf />
    </view>
    <view v-if="param === records.MY_SELF_RECIPE.key">
      <MySelfList :open_func="open_func" :testRecord="testRecord" />
    </view>
    <view v-if="param === records.MY_SELF_SET.key">
      <MySelfSet :open_func="open_func" :testRecord="testRecord" />
    </view>
    <view v-if="param === records.SELL_COOKED.key">
      <SellCooked />
    </view>
    <view v-if="param === records.COOKPAD.key">
      <CookPad />
    </view>
  </view>
</template>

<script>
import * as RECORDS from "../../../../constants/Records";
import Modal from "../../../parts/Modal";
import CookPad from "./CookPad";
import MySelfList from "./MySelfList";
import MySelfSet from "./MySelfSet";
import NewMySelf from "./NewSelfRecipe";
import SellCooked from "./SellCooked";

export default {
  data: () => {
    return {
      records: RECORDS,
    };
  },
  components: { CookPad, NewMySelf, MySelfList, SellCooked, MySelfSet },
  props: {
    param: {
      type: String,
      default: "test",
    },
    open_func: {
      type: Function,
    },
    testRecord: {
      type: Array,
    },
  },
};
</script>
