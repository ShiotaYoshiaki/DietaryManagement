<template>
  <view>
    <view v-if="param === records.NEW_SELF_RECIPE.key">
      <NewMySelf />
    </view>
    <view v-if="param === records.MY_SELF_RECIPE.key">
      <MySelfList />
    </view>
    <view v-if="param === records.MY_SELF_SET.key">
      <MySelfSet />
    </view>
    <view v-if="param === records.SELL_COOKED.key">
      <SellCooked />
    </view>
    <view v-if="param === records.COOKPAD.key">
      <CookPad />
    </view>
    <view v-if="param === records.MY_SELF_SET_REGISTER.key">
      <MySelfSetRegister />
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
import MySelfSetRegister from "./MySelfSetRegister";

export default {
  data: () => {
    return {
      records: RECORDS
    };
  },
  components: { CookPad, NewMySelf, MySelfList, SellCooked, MySelfSet, MySelfSetRegister },
  props: {
    param: {
      type: String,
      default: "test"
    },
  },
};
</script>