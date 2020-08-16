<template>
  <view class="container">
    <text class="title">ユーザー情報</text>
    <view class="info_wrapper">
      <nb-text class="info_details">生年月日：</nb-text>
      <nb-text class="info_details">ユーザーネーム：</nb-text>
      <nb-text class="info_details">身長：</nb-text>
      <nb-text class="info_details">体重：</nb-text>
      <nb-text class="info_details">BMI：</nb-text>
      <nb-text class="info_details">性別：</nb-text>
    </view>
    <view class="ranking_container">
      <view class="lack_ranking">
        <text>足りていない栄養素TOP3</text>
        <text class="ranking_border">テスト１</text>
        <text class="ranking_border">テスト２</text>
        <text class="ranking_border">テスト３</text>
      </view>
      <view class="over_ranking">
        <text>摂りすぎな栄養素TOP3</text>
        <text class="ranking_border">テスト１</text>
        <text class="ranking_border">テスト２</text>
        <text class="ranking_border">テスト３</text>
      </view>
    </view>
    <view class="details_container">
      <nb-text class="checking_nutrients">摂取栄養素を見る</nb-text>
      <nb-button
        block
        class="changeing_user_info"
        :onPress="() => this.props.navigation.navigate(listItemArr[0].route)"
      >
        <nb-text>ユーザー情報を変更する</nb-text>
      </nb-button>
    </view>
    <view class="home_button">
      <nb-button class="button_background">
        <text class="allow_button">&lt;&#60;</text>
      </nb-button>
    </view>
  </view>
</template>

<script>
export default {
  data: () => {
    return {
      listItemArr: [
        {
          route: "UserInfoFix",
          text: "ユーザー情報を変更する",
        },
      ],
    };
  },
};
</script>

<style>
.container {
  justify-content: center;
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

.info_wrapper {
  margin-left: 30px;
}

.info_details {
  line-height: 30;
}

.ranking_container {
  flex-direction: row;
  justify-content: center;
}

.lack_ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  width: 160px;
  text-align: center;
  margin-top: 30px;
  margin-right: 20px;
}

.ranking_border {
  height: 30;
  border-color: black;
  border-style: solid;
  border-width: 0.5px;
}

.over_ranking {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  width: 160px;
  text-align: center;
}

.details_container {
  flex-direction: row;
  justify-content: center;
  margin-left: 20px;
}

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

.home_button {
  font-size: 40px;
  margin-top: 60px;
  margin-left: 20px;
  width: 20px;
}

.button_background {
  background-color: white;
}

.allow_button {
  font-size: 30px;
}
</style>
