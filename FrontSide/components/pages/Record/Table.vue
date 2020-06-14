<template>
  <view class="container">
    <view class="l_record_table">
      <view class="l_table">
        <view class="l_button_tabs">
          <view
            v-for="cook in cokked"
            :key="cook.key"
            class="l_tab_cook"
            accessibilityRole="button"
          >
            <text>{{ cook.message}}</text>
          </view>
        </view>
        <view class="l_content">
          <view class="l_recipi_button">
            <view class="c_recipi_button" v-for="recipi in recipis" :key="recipi.key">
              <button :title="recipi.message" :on-press="openItem" />
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
    <view v-if="isModalActive" class="l_back_modal" >
      <view class="l-modal">
        <button title="閉じる" :on-press="openItem" />
        <text>{ clickで表示したいmodal_content部分 }</text>
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
      testRecord: EMPTY_RECIPE,
      isModalActive: false
    };
  },
  methods: {
    /**
     * clickイベントが発火されたタイミングで、
     * オーバーレイコンテンツを表示するフラグを持つdata(isModalActive)を切り替える
     */
    openItem() {
      this.toggleModal();
    },
    /**
     * active状態を切り替える。
     */
    toggleModal() {
      console.log("toggleModal");
      this.isModalActive = !this.isModalActive;
    }
  }
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}

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

.l_back_modal {
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
  width: 100%;
  opacity: 0.5;
}

.l-modal {
  height: 100;
  width: 100;
  background-color: red;
}
</style>
