<template>
  <view class="container">
    <text-input
      :style="{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }"
      v-model="messageText"
    />
    <button :on-press="saveMessage" title="Save" />
    <text v-for="(message, index) in messages" :key="index">{{ message }}</text>
  </view>
</template>
<script>
export default {
  data: () => {
    return {
      messageText: "",
      messages: [],
    };
  },
  methods: {
    saveMessage: () => {
      this.messages.push(this.messageText);
      this.messageText = "";
    },
  },
};
</script>
<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
