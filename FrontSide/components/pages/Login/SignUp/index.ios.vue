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
          <nb-input placeholder="メールアドレス" placeholderTextColor="#999" />
        </nb-item>
        <nb-item>
          <nb-input
            placeholder="パスワード"
            secureTextEntry
            pattern="^[0-9A-Za-z]+$"
            minlenght="8"
            placeholderTextColor="#999"
          />
        </nb-item>
        <nb-item>
          <nb-input
            placeholder="パスワード（確認用）"
            secureTextEntry
            pattern="^[0-9A-Za-z]+$"
            minlenght="8"
            placeholderTextColor="#999"
          />
        </nb-item>

        <nb-item>
          <nb-input placeholder="ユーザーネーム" placeholderTextColor="#999" />
        </nb-item>

        <view class="flex" :style="stylesObj.marginRight">
          <nb-card-item :style="stylesObj.birthDay">
            <nb-text>生年月日</nb-text>
          </nb-card-item>
          <nb-item class="flex1" :style="stylesObj.year">
            <nb-picker
              mode="dropdown"
              :iosIcon="getIosIcon()"
              placeholder="年"
              placeholderStyle="{ color: '#bfc6ea' }"
              placeholderIconColor="#007aff"
              :selectedValue="selected1"
              :onValueChange="onValueChange1"
              :style="stylesObj.picker"
            >
              <item
                v-for="year in years"
                :key="year.id"
                :label="year.value"
                :value="year.id"
                :style="stylesObj.item"
              />
            </nb-picker>
          </nb-item>
          <nb-item class="flex1" :style="stylesObj.month">
            <nb-picker
              mode="dropdown"
              :iosIcon="getIosIcon()"
              placeholder="月"
              :placeholderStyle="{ paddingLeft: 20 }"
              placeholderIconColor="#007aff"
              :selectedValue="selected2"
              :onValueChange="onValueChange2"
              :style="stylesObj.picker"
            >
              <item
                v-for="month in months"
                :key="month.id"
                :label="month.value"
                :value="month.id"
                :style="stylesObj.item"
              />
            </nb-picker>
          </nb-item>
          <nb-item class="flex1" :style="stylesObj.day">
            <nb-picker
              mode="dropdown"
              :iosIcon="getIosIcon()"
              placeholder="日"
              :placeholderStyle="{ paddingLeft: 20 }"
              placeholderIconColor="#007aff"
              :selectedValue="selected3"
              :onValueChange="onValueChange3"
              :style="stylesObj.picker"
            >
              <item
                v-for="day in days"
                :key="day.id"
                :label="day.value"
                :value="day.id"
                :style="stylesObj.item"
              />
            </nb-picker>
          </nb-item>
        </view>

        <nb-item class="flex w110">
          <nb-input
            placeholder="身長"
            class="weightHeight"
            pattern="[1-9][0-9]*"
            placeholderTextColor="#999"
          />
          <nb-text class="flex1">cm</nb-text>
        </nb-item>

        <nb-item class="flex w110">
          <nb-input
            placeholder="体重"
            class="weightHeight"
            pattern="[1-9][0-9]*"
            placeholderTextColor="#999"
          />
          <nb-text class="flex1">kg</nb-text>
        </nb-item>

        <nb-item class="w110">
          <nb-picker
            mode="dropdown"
            :iosIcon="getIosIcon()"
            placeholder="性別"
            placeholderStyle="{ color: '#bfc6ea' }"
            placeholderIconColor="#007aff"
            :selectedValue="selected4"
            :onValueChange="onValueChange4"
          >
            <item label="男性" value="key0" />
            <item label="女性" value="key1" />
          </nb-picker>
        </nb-item>
      </nb-form>

      <nb-button block :style="{ marginTop: 50 }">
        <nb-text>確定</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import React from "react";
import { Picker, Icon } from "native-base";
import {
  YEAR_SET,
  MONTH_SET,
  DAY_SET,
} from "../../../../constants/TestUserInfo";

export default {
  data() {
    return {
      years: YEAR_SET,
      months: MONTH_SET,
      days: DAY_SET,
      selected1: "",
      selected2: "",
      selected3: "",
      selected4: "",
      stylesObj: {
        birthDay: {
          alignItems: "center",
          height: 50,
          justifyContents: "center",
          paddingRight: 0,
        },
        marginRight: {
          marginRight: 40,
        },
        item: {
          marginRight: 0,
          paddingRight: 0,
          marginLeft: 0,
          paddingLeft: 0,
          alignContent: 'flex-start',
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
        },
        picker: {
          marginRight: 0,
          paddingRight: 0,
          marginLeft: 0,
          paddingLeft: 0,
        },
        year: {
          marginRight: 35,
          paddingRight: 25,
          marginLeft: 0,
          paddingLeft: 0,
        },
        month: {
          marginRight: 20,
          paddingRight: 0,
          marginLeft: 0,
          paddingLeft: 0,
        },
        day: {
          marginRight: 0,
          paddingRight: 0,
          marginLeft: 0,
          paddingLeft: 10,
        },
        
      },
    };
  },
  components: { Item: Picker.Item },
  methods: {
    onValueChange1(value) {
      this.selected1 = value;
    },
    onValueChange2(value) {
      this.selected2 = value;
    },
    onValueChange3(value) {
      this.selected3 = value;
    },
    onValueChange4(value) {
      this.selected4 = value;
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
