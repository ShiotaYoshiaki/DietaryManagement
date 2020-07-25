<template>
  <view>
    <view class="Top">
      <view class="SerchBox">
        <text-input v-model="keyword" />
      </view>
      <view class="serch">
        <nb-button>
          <text>検索</text>
        </nb-button>
      </view>
      <view class="Sort">
        <nb-button :on-press="changeSort">
          <MaterialIcons name="sort" size="40" color="black" />
        </nb-button>
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
        <nb-button :on-press="addFunc">
          <text>献立に追加</text>
        </nb-button>
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
    testRecord: {
      type: Array,
    },
  },
  methods: {
    changeSort() {
      console.log(this.testRecord);
    },
    addFunc() {
      const boolemAdd = this.cooks.filter((value) => {
        const filterValue = value.checked;
        return filterValue;
      });
      let testRecordLength = this.testRecord.length + 1;
      console.log(this.testRecord);
      boolemAdd.forEach((element) => {
        this.testRecord.push(element);
      });
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
