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
    <Modal :is_active="isModalActive" :open_func="openItem">
      <view class="red">
        <text>test太郎</text>
      </view>
    </Modal>
  </view>
</template>

<script>
import { MEALS } from "../../../constants/meals";
import { INPUT_RECIPE, EMPTY_RECIPE } from "../../../constants/Records";
import Modal from "../../parts/Modal";
import NewMySelf from "./Modal/NewMySelf";

export default {
  data: () => {
    return {
      cokked: MEALS,
      recipis: INPUT_RECIPE,
      testRecord: EMPTY_RECIPE,
      isModalActive: false
    };
  },
  components: { Modal, NewMySelf },
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
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.red {
  background-color: red;
}
</style>
