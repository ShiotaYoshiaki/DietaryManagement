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

        <view class="flex">
          <nb-card-item :style="stylesObj.birthDay">
            <nb-text>生年月日</nb-text>
          </nb-card-item>
          <nb-item class="flex1">
            <nb-input placeholder="年" />
          </nb-item>
          <nb-item class="flex1">
            <nb-input placeholder="月" />
          </nb-item>
          <nb-item class="flex1">
            <nb-input placeholder="日" />
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
export default {
  data() {
    return {
      stylesObj: {
        birthDay: {
          alignItems: 'center',
          height: 50,
          justifyContents: 'center'
        },
      }
    };
  }
}
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
