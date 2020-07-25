<template>
  <view>
    <view class="Top">
      <view class="SerchBox">
        <text-input v-model="keyword" />
      </view>
      <view class="serch">
        <touchable-opacity>
          <text>検索</text>
        </touchable-opacity>
      </view>
      <view class="Sort">
        <touchable-opacity :on-press="changeSort">
          <MaterialIcons name="sort" size="40" color="black" />
        </touchable-opacity>
      </view>
    </view>
    <view class="Main">
      <text>aaaa</text>
      <!-- <view class="List" v-for="cook in cooks" :key="cook.key">
        <view class="My_list"></view>
        <view class="Serving"></view>
        <view class="CheckBox"></view>
        <view class="Look_nutrition"></view>
      </view> -->
    </view>
    <view class="Last">
      <view class="Add_menu"></view>
    </view>
  </view>
</template>

<script>
import { MaterialIcons } from "@expo/vector-icons";
import { Mylist } from "../../../constants/MyList";
export default {
  data() {
    return {
      keyword: "aaa",
      cooks: Mylist,
    };
  },
  components: {
    MaterialIcons,
  },
  methods: {
    changeSort() {
      console.log(this.keyword);
    },
  },
};
</script>

<style modules>
.Top {
  background-color: rgb(174, 228, 230);
  flex-direction: row;
  justify-content: center;
  width: 80%;
  align-items: center;
}
.SerchBox {
  border-width: 1;
  flex: 5;
}
.serch {
  border-width: 1;
  flex: 1;
  margin-left: 0.5;
}
.Sort {
  margin-left: 5;
  border-width: 1;
  flex: 1;
}
.Main {
  background-color: red;
}
</style>
