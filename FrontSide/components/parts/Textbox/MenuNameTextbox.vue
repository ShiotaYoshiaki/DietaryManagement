// マイ自炊セット登録の「献立名」のテキストボックス
<template>
  <view class="flex mt10">
    <view class="menuName">
      <text>献立名 : </text>
    </view>
    <view class="menuNameTextbox">
      <TextInput placeholder="入力してください" />
    </view>
  </view>
</template>


<style modules>
.flex {
  flex-direction: row;
}

.mt10 {
  margin-top: 10px;
}

.menuNameTextbox {
  width: 80%;
  height: 130%;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}

</style>
