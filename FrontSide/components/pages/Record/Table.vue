<template>
  <view class="l_record_table">
    <view class="l_table">
      <view class="l_button_tabs">
        <view v-for="cook in cokked" :key="cook.key" class="l_tab_cook" accessibilityRole="button">
          <text>{{ cook.message}}</text>
        </view>
      </view>
      <view class="l_content">
        <view class="l_recipi_button">
          <view class="c_recipi_button" v-for="recipi in recipis" :key="recipi.key">
            <button :title="recipi.message" />
          </view>
        </view>
        <view>
          <view class="c_recipi_label">
            <text>朝食の献立</text>
          </view>
          <view class="c_recipi_history" v-for="record in testRecord" :key="record.key">
            <text>{{record.message}}</text>
          </view>
          <view>
            <text>マイ自炊セットに登録</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { MEALS } from "../../../constants/meals";
import { INPUT_RECIPE, EMPTY_RECIPE } from "../../../constants/Records";

export default {
  data: () => {
    return {
      cokked: MEALS,
      recipis: INPUT_RECIPE,
      testRecord: EMPTY_RECIPE
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
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  width: 100%;
  flex-direction: row;
  /* height: 100; */
}

.l_recipi_button {
  width: 200;
}

.c_recipi_button {
  margin-bottom: 20;
}

.c_recipi_label {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}

.c_recipi_history {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}
</style>
