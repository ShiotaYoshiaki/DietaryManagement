<template>
  <view class="l_record_table">
    <view class="l_table">
      <view class="l_button_tabs">
        <view v-for="cook in cokked" :key="cook.key" class="l_tab_cook" accessibilityRole="button">
          <text>{{ cook.message}}</text>
        </view>
      </view>
      <view class="l_content">
        <text>test</text>
      </view>
    </view>
  </view>
</template>

<script>
import { MEALS } from "../../../constants/meals";

export default {
  data: () => {
    return {
      cokked: MEALS
    };
  }
};
</script>

<style>
.l_record_table {
  width: 100%;
  padding: 8px;
}

.l_table {
  width: 100%;
}

.l_button_tabs {
  flex-direction: row;
}

.l_tab_cook {
  width: 25%;
  height: 50;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}

.l_content {
  background-color: lightcoral;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  width: 100%;
  /* height: 100; */
}
</style>
