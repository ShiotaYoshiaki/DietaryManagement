// マイ自炊セット登録の「献立名」のテキストボックス
<template>
  <view class="flex m20">
    <view class="menuName">
      <text>献立名 : </text>
    </view>
    <view class="menuNameTextbox">
      <TextInput placeholder="入力してください" />
    </view>
  </view>
</template>

<script>
export default {
  
}
</script>

<style modules>
.flex {
  flex-direction: row;
}

.m20 {
  margin: 20px;
}

.menuName {
  
}

.menuNameTextbox {
  width: 50%;
  height: 30;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}

</style>
