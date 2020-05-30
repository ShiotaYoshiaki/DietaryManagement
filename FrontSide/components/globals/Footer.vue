<template>
  <view class="l_footer">
    <view class="l_footer_icon">
      <Button title="Press me" color='transparent' />
      <Button title="Press me" color='transparent' class="c_footer_icon" />
      <Button title="Press me" class="c_footer_icon" />
      <Button title="Press me" class="c_footer_icon" />
    </view>
  </view>
</template>

<style>
.l_footer {
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #ddd;
}

.l_footer_icon {
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
}

</style>
