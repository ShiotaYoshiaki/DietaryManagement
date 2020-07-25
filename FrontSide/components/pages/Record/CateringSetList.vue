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
      <view class="List" v-for="cook in cooks" :key="cook.key">
        <view class="My_list">
          <text>{{ cook.message }}</text>
        </view>
        <view class="Serving">
          <text-input v-model="number" type="number" />
        </view>
        <view class="CheckBox">
          <nb-checkbox
            :checked="cook.checked"
            :on-press="() => (cook.checked = !cook.checked)"
          ></nb-checkbox>
        </view>
        <view class="Look_nutrition"></view>
      </view>
    </view>
    <view class="Last">
      <view class="Add_menu">
        <touchable-opacity :on-press="addFunc">
          <text>献立に追加</text>
        </touchable-opacity>
      </view>
    </view>
  </view>
</template>

<script>
import { MaterialIcons } from "@expo/vector-icons";
import { Mylist } from "../../../constants/MyList";
export default {
  data() {
    return {
      keyword: "",
      cooks: Mylist,
      number: "0",
      check_box: "",
    };
  },
  components: {
    MaterialIcons,
  },
  props: {
    open_func: {
      type: Function,
    },
    is_active: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    changeSort() {
      console.log(this.cooks);
    },
    addFunc() {
      const boolemAdd = this.cooks.filter((value) => {
        const filterValue = value.checked;
        return filterValue;
      });
      console.log("ここからemit");
      this.open_func();
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
.List {
  background-color: rgb(174, 228, 230);
  flex-direction: row;
  justify-content: center;
  width: 80%;
  align-items: center;
}
.Serving {
  background-color: rgb(162, 157, 168);
}
</style>
