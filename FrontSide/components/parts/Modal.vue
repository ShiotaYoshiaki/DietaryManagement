<template>
  <view v-if="is_active" class="l_back_modal">
    <view class="l_modal">
      <view class="l_close_button">
        <button title="閉じる" :on-press="open_func" />
      </view>
      <view class="c_modal">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    is_active: {
      type: Boolean,
      default: false
    },
    open_func: {
      type: Function,
    },
    children: {
      default: true,
    }
  },
};
</script>

<style>
.l_back_modal {
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.l_modal {
  height: 100;
  width: 100;
  background-color: #ffffff;
  opacity: 100;
  min-width: 250;
  min-height: 250;
  padding-top: 32;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16;
}

.c_modal {
}

.l_close_button {
  position: absolute;
  background-color: red;
  right: 0;
}
</style>
