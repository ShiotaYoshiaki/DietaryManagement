<template>
  <view>
    <nb-button class="small-box" :on-press="numberParam">
      <text class="small-font">栄養素を見る</text>
    </nb-button>
    <nb-button class="small-box" :on-press="numberParam">
      <text class="small-font">栄養素を見る</text>
    </nb-button>
    <nb-button class="small-box" :on-press="numberParam">
      <text class="small-font">栄養素を見る</text>
    </nb-button>
    <nb-button class="small-box" :on-press="numberParam">
      <text class="small-font">栄養素を見る</text>
    </nb-button>
    <nb-button class="small-box" :on-press="numberParam">
      <text class="small-font">栄養素を見る</text>
    </nb-button>
  </view>
</template>
<script>
export default {
  methods: {
    numberParam: function () {
      alert("栄養素一覧に飛ぶ予定");
    },
  },
};
</script>

<style modules>
.small-box {
  height: 50;
  width: 50%;
}
.small-font {
  font-size: 10;
}
</style>
