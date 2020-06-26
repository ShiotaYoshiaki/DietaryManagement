<template>
  <view class="container">
    <view class="title"> </view>
    <view class="info-wrapper">
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
        <view></view>
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
    <view class="details_container">
      <view class="checking_nutrients">
        <text>摂取栄養素を見る</text>
      </view>
      <view class="changeing_user_info">
        <text>ユーザー情報を変更する</text>
      </view>
    </view>
  <view>
    <text class="home_button">←</text>
  </view>
  </view>
</template>

<style>
.container {
  /* align-items: center; */
  justify-content: center;
  /* flex: 1; */
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
.info-wrapper {
  margin-left: 40px;
}




/*ランキングのコンテイナー*/
.ranking_container {
  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
}

/*足りてない栄養素テーブル*/
.lack_Ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  margin-right: 20px;
  width: 160px;
  text-align: center;
}

/*取りすぎな栄養素テーブル*/
.over_Ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  width: 160px;
  text-align: center;
}

/*詳細情報コンテイナー*/
.details_container {
  flex-direction: row;
  justify-content: center;
  margin-left: 20px;
}

/*摂取栄養素を見る*/
.checking_nutrients {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  margin-right: 20px;
  width: 160px;
  text-align: center;
}

/*ユーザー情報を変更する*/
.changeing_user_info {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  margin-right: 20px;
  width: 160px;
}


/*ホームへ戻るボタン*/
.home_button {
  font-size: 40px;
  margin-top: 60px;
  margin-left: 20px;
}





</style>
