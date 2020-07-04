<template>
  <view class="container">
    <text class="title">ユーザー情報</text>
    <view class="info-wrapper">
      <view><nb-text class="info-details">ユーザーネーム：</nb-text></view>
      <view><nb-text class="info-details">生年月日：</nb-text></view>
      <view><nb-text class="info-details">体重：</nb-text></view>
      <nb-text class="info-details">身長：</nb-text>
      <nb-text class="info-details">BMI：</nb-text>
      <nb-text class="info-details">性別：</nb-text>
    </view>
    <!-- <nb-button block primary>
      <nb-text>Primary</nb-text>
    </nb-button> -->
    <view class="ranking_container">
      <view class="lack_Ranking">
        <text>足りていない栄養素TOP3</text>   
        <view><text class="ranking_border">テスト１</text></view>
        <view><text class="ranking_border">テスト２</text></view>
        <view><text class="ranking_border">テスト３</text></view>
      </view>
      <view class="over_Ranking">
        <text>摂りすぎな栄養素TOP3</text>
        <view><text class="ranking_border"></view>
        <view><text class="ranking_border"></view>
        <view><text class="ranking_border"></view>
      </view>
    </view>
    <view class="details_container">
      <view>
        <nb-text class="checking_nutrients">摂取栄養素を見る</nb-text>
      </view>
      <view>
        <text class="changeing_user_info">ユーザー情報を変更する</text>
      </view>
    </view>
  <view class="home_button">
    <nb-button><text color="red">←</text></nb-button>
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
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
.info-wrapper {
  margin-left: 30px;

}

.info-details {
  line-height: 30;
}


/*ランキングのコンテイナー*/
.ranking_container {
  flex-direction: row;
  justify-content: center;
}

/*足りてない栄養素テーブル*/
.lack_Ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  width: 160px;
  text-align: center;
  margin-top: 30px;
  margin-right: 20px;
  /* background-color: red; */
 
}

/*ランキングテーブルボーダー*/
.ranking_border {
  height: 30;
  border-color: black;
  border-style: solid;
  border-width: 0.5px;
  /* border-bottom-width: 1px; */
}

/*取りすぎな栄養素テーブル*/
.over_Ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  width: 160px;
  text-align: center;
  /* border-collapse: collapse; */
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
  font-size: 15px;
}

/*ユーザー情報を変更する*/
.changeing_user_info {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  margin-right: 20px;
  width: 160px;
  text-align: center;
  font-size: 15px;
}


/*ホームへ戻るボタン*/
.home_button {
  font-size: 40px;
  margin-top: 60px;
  margin-left: 20px;
}







</style>
