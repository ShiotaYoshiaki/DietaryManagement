<template>
  <view>
    <nb-form>
      <nb-item>
        <nb-text>料理名:</nb-text>
        <nb-input placeholder="料理名" />
      </nb-item>
    </nb-form>
    <view class="main border">
      <view class="food_details">
        <nb-grid>
          <nb-row class="food_name">
            <nb-col class="food_name_item" size="1.2">
              <nb-text>食材名：</nb-text>
            </nb-col>
            <nb-col size="2">
              <nb-input placeholder="食材名" class="food_name_box border" />
            </nb-col>
          </nb-row>
          <nb-row class="food_name">
            <nb-col class="food_name_item" size="0.5">
              <nb-text>量</nb-text>
            </nb-col>
            <nb-col size="1">
              <nb-input placeholder="量" class="food_name_box border" />
            </nb-col>
            <nb-col class="food_name_item" size="0.7">
              <nb-text>単位</nb-text>
            </nb-col>
            <nb-col size="1">
              <nb-input placeholder="単位" class="food_name_box border" />
            </nb-col>
          </nb-row>
          <nb-row class="food_name">
            <nb-col>
              <nb-button class="add_button">
                <nb-text>追加</nb-text>
              </nb-button>
            </nb-col>
          </nb-row>
        </nb-grid>
      </view>
      <view class="food_list">
        <nb-text>食材リスト</nb-text>
        <view v-for="(meal, index) in meals" :key="index">
          <nb-text>{{meal.message}}</nb-text>
        </view>
      </view>
    </view>
    <nb-grid>
      <nb-col class="howToCook" size="2">
        <nb-text>調理法</nb-text>
        <nb-form>
          <nb-picker
            note
            mode="dropdown"
            :style="{ width: 120 }"
            :selectedValue="selected"
            :onValueChange="onValueChange"
            iosHeader="選択して下さい"
            headerBackButtonText="戻る"
          >
            <item
              v-for="cooking in cookings"
              :key="cooking.message"
              :label="cooking.message"
              :value="cooking.key"
            />
          </nb-picker>
        </nb-form>
      </nb-col>
      <nb-col size="1">
        <nb-button>
          <nb-text>登録＆献立に追加</nb-text>
        </nb-button>
      </nb-col>
    </nb-grid>
  </view>
</template>
<script>
import { Picker } from "native-base";
export default {
  data() {
    return {
      meals: [
        { message: "aaa1" },
        { message: "aaa2" },
        { message: "aaa3" },
        { message: "aaa4" },
      ],
      cookings: [
        {
          message: "茹でる",
          key: "key0",
        },
        {
          message: "揚げる",
          key: "key1",
        },
        {
          message: "焼く",
          key: "key2",
        },
        {
          message: "炒める",
          key: "key3",
        },
        {
          message: "煮る",
          key: "key4",
        },
        {
          message: "蒸す",
          key: "key5",
        },
      ],
      selected: "key1",
    };
  },
  methods: {
    onValueChange: function (value) {
      this.selected = value;
    },
  },
};
</script>
<style>
.main {
  background-color: aqua;
  flex-direction: row;
  margin-top: 10;
}
.food_details {
  flex: 2;
}
.food_list {
  flex: 1;
  border-width: 1;
}
.food_name {
  margin-top: 10;
}
.food_name_item {
  align-self: center;
}
.border {
  border-width: 1;
}
.howToCook {
  align-self: center;
}
.add_button {
  align-self: flex-end;
}
</style>