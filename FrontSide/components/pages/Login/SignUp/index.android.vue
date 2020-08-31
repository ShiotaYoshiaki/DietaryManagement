// 新規会員登録画面
<template>
  <nb-container :style="{ backgroundColor: '#fff' }">

    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input placeholder="メールアドレス" pattern="^[0-9A-Za-z]+$" placeholderTextColor="#999" />
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
          <nb-item class="flex14">
            <nb-picker
              note
              mode="dropdown"
              :style="{ width: 122 }"
              :selectedValue="selected1"
              :onValueChange="onValueChange1"
            >
              <item
                v-for="year in years"
                :key="year.id"
                :label="year.value"
                :value="year.id"
              />
            </nb-picker>
          </nb-item>
          <nb-item class="flex1">
            <nb-picker
              note
              mode="dropdown"
              :style="{ width: 92 }"
              :selectedValue="selected2"
              :onValueChange="onValueChange2"
            >
              <item
                v-for="month in months"
                :key="month.id"
                :label="month.value"
                :value="month.id"
              />
            </nb-picker>
          </nb-item>
          <nb-item class="flex1">
            <nb-picker
              note
              mode="dropdown"
              :style="{ width: 100 }"
              :selectedValue="selected3"
              :onValueChange="onValueChange3"
            >
              <item
                v-for="day in days"
                :key="day.id"
                :label="day.value"
                :value="day.id"
              />
            </nb-picker>
          </nb-item>
        </view>

        <nb-item class="flex w110">
          <nb-input placeholder="身長" class="weightHeight" placeholderTextColor="#999" />
          <nb-text class="flex1">cm</nb-text>
        </nb-item>

        <nb-item class="flex w110">
          <nb-input placeholder="体重" class="weightHeight" placeholderTextColor="#999" />
          <nb-text class="flex1">kg</nb-text>
        </nb-item>

        <nb-item class="w110">
          <nb-picker
            note
            mode="dropdown"
            :style="{ width: 120 }"
            :selectedValue="selected4"
            :onValueChange="onValueChange4"
          >
            <item label="男性" value="key0" />
            <item label="女性" value="key1" />
          </nb-picker>
        </nb-item>
      </nb-form>

      <nb-button block :style="{ margin: 15, marginTop: 50 }">
        <nb-text>確定</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import {
  YEAR_SET,
  MONTH_SET,
  DAY_SET,
} from "../../../../constants/TestUserInfo";
import { Picker } from "native-base";

export default {
  data() {
    return {
      years: YEAR_SET,
      months: MONTH_SET,
      days: DAY_SET,
      selected1: "y_1980",
      selected2: "m_1",
      selected3: "d_1",
      selected4: "key0",
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

.weightHeight {
  flex: 1.5;
}

.birth {
  align-items: center;
}

.w110 {
  width: 110;
}
</style>
