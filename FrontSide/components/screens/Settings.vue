<template>
  <view class="container">
    <view class="title"> </view>
    <view>
      <text class="info">ユーザー情報</text>
      <text>ユーザーネーム：</text>
      <text>生年月日：</text>
      <text>体重：</text>
      <text>身長：</text>
      <text>BMI：</text>
      <text>性別：</text>
    </view>
    <view class="ranking_container">
      <view class="lack_Ranking">
        <text>足りていない栄養素TOP3</text>
        <view class="lack_Ranking"></view>
        <view></view>
        <view></view>
      </view>
      <view class="over_Ranking">
        <text>摂りすぎな栄養素TOP3</text>
        <view></view>
        <view></view>
        <view></view>
      </view>
    </view>
  </view>
</template>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}

.title {
  font-size: 30px;
}

.info {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}


/*足りてない栄養素テーブル*/
.lack_Ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}

/*取りすぎな栄養素テーブル*/
.over_Ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
}

/*ランキングのコンテイナー*/
.ranking_container {
  flex: 1;
  flex-direction: row;
}




</style>
