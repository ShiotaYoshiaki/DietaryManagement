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
          <nb-input>
            {{ user.mail }}
          </nb-input>
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
          <nb-input>
            {{ user.username }}
          </nb-input>
        </nb-item>

        <view class="flex" :style="stylesObj.marginRight">
          <nb-card-item :style="stylesObj.birthDay">
            <nb-text>生年月日</nb-text>
          </nb-card-item>
          <nb-item class="flex14">
            <nb-input>
              {{ user.birthday.year }}
            </nb-input>
            <nb-text>年</nb-text>
          </nb-item>
          <nb-item class="flex1">
            <nb-input>
              {{ user.birthday.month }}
            </nb-input>
            <nb-text>月</nb-text>
          </nb-item>
          <nb-item class="flex1">
            <nb-input>
              {{ user.birthday.day }}
            </nb-input>
            <nb-text>日</nb-text>
          </nb-item>
        </view>

        <nb-item class="flex w110">
          <nb-input>
            {{ user.height }}
          </nb-input>
          <nb-text class="flex1">cm</nb-text>
        </nb-item>

        <nb-item class="flex w110">
          <nb-input>
            {{ user.weight }}
          </nb-input>
          <nb-text class="flex1">kg</nb-text>
        </nb-item>

        <nb-item class="w110">
          <nb-input>
            {{ user.sex }}
          </nb-input>
        </nb-item>
      </nb-form>

      <nb-button block :style="{ margin: 15, marginTop: 50 }">
        <nb-text>確定</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { TEST_USER } from "../../../constants/TestUserInfo";

export default {
  data() {
    return {
      user: TEST_USER,
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
