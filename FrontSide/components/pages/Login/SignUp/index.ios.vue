// 新規会員登録画面
<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-body>
        <nb-title>新規会員登録</nb-title>
      </nb-body>
    </nb-header>

    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input placeholder="メールアドレス" />
        </nb-item>
        <nb-item>
          <nb-input
            placeholder="パスワード"
            secureTextEntry
            pattern="^[0-9A-Za-z]+$"
            minlenght="8"
          />
        </nb-item>
        <nb-item>
          <nb-input
            placeholder="パスワード（確認用）"
            secureTextEntry
            pattern="^[0-9A-Za-z]+$"
            minlenght="8"
          />
        </nb-item>

        <nb-item>
          <nb-input placeholder="ユーザーネーム" />
        </nb-item>

        <view class="flex" :style="stylesObj.marginRight">
          <nb-card-item :style="stylesObj.birthDay">
            <nb-text>生年月日</nb-text>
          </nb-card-item>
          <nb-item class="flex14">
            <nb-picker
              mode="dropdown"
              :iosIcon="getIosIcon()"
              placeholder="年"
              placeholderStyle="{ color: '#bfc6ea' }"
              placeholderIconColor="#007aff"
              :selectedValue="selected1"
              :onValueChange="onValueChange"
            >
              <item v-for="year in years" :key="year.key" label=year.value value= year.key />
            </nb-picker>
          </nb-item>
          <nb-item class="flex1">
            <nb-input />
            <nb-text>月</nb-text>
          </nb-item>
          <nb-item class="flex1">
            <nb-input />
            <nb-text>日</nb-text>
          </nb-item>
        </view>

        <nb-item class="flex w110">
          <nb-input placeholder="身長" class="weightHeight" />
          <nb-text class="flex1">cm</nb-text>
        </nb-item>

        <nb-item class="flex w110">
          <nb-input placeholder="体重" class="weightHeight" />
          <nb-text class="flex1">kg</nb-text>
        </nb-item>

        <nb-item class="w110">
          <nb-input placeholder="性別" />
        </nb-item>
      </nb-form>

      <nb-button block :style="{ margin: 15, marginTop: 50 }">
        <nb-text>確定</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import React from "react";
import { Picker, Icon } from "native-base";
import { YEAR_SET, MONTH_SET, DAY_SET } from "../../../../constants/TestUserInfo";

export default {
  data() {
    return {
      years: YEAR_SET,
      months: MONTH_SET,
      days: DAY_SET,
      selected1: "",
      stylesObj: {
        birthDay: {
          alignItems: "center",
          height: 50,
          justifyContents: "center",
        },
        marginRight: {
          marginRight: 40,
        },
      },
    };
  },
  components: { Item: Picker.Item },
  methods: {
    onValueChange(value) {
      this.selected1 = value;
    },
    getIosIcon() {
      return <Icon name="ios-arrow-down" />;
    },
  },
};
</script>

<style>
.flex {
  flex-direction: row;
}

.flex1 {
  flex: 1;
}

.flex14 {
  flex: 1.4;
}

.weightHei0ght {
  flex: 1.5;
}

.birth {
  align-items: center;
}

.w110 {
  width: 110;
}
</style>
