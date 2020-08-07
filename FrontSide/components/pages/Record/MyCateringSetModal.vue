t<template>
  <view>
    <view class="top">
      <view class="serchBox">
        <text-input v-model="keyword" :on-change="(e) => changeKeyword(e)" />
      </view>
      <view class="serch">
        <nb-button :on-press="searchFunc">
          <text>検索</text>
        </nb-button>
      </view>
      <view class="sort">
        <nb-button :on-press="changeSort">
          <MaterialIcons name="sort" size="40" color="black" />
        </nb-button>
      </view>
    </view>
    <view class="main">
      <view class="list" v-for="cook in cooks" :key="cook.key">
        <view class="my_list">
          <text>{{ cook.SetMenu }}</text>
        </view>
        <view class="serving">
          <text-input v-model="number" type="number" />
          <text>人前</text>
        </view>
        <view class="checkbox">
          <nb-checkbox
            :checked="cook.checked"
            :on-press="() => checkboxFunc(cook.key)"
          ></nb-checkbox>
        </view>
        <view class="look_nutrition">
          <nb-button :on-press="look_nutritionFunc">
            <text>栄養素を見る</text>
          </nb-button>
        </view>
      </view>
    </view>
    <view class="last">
      <view class="add_menu">
        <nb-button :on-press="addFunc">
          <text>献立に追加</text>
        </nb-button>
      </view>
    </view>
  </view>
</template>

<script>
import { MaterialIcons } from "@expo/vector-icons";
import { MyList } from "../../../constants/MyList";
export default {
  data() {
    return {
      keyword: "",
      cooks: MyList,
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
    changeKeyword(e) {
      this.keyword = e.nativeEvent.text;
    },
    searchFunc() {
      const searched = this.cooks.filter((value) => {
        const indexNum = value.message.indexOf(this.keyword);
        return indexNum !== -1;
      });
      this.cooks = searched;
    },
    checkboxFunc(value) {
      const confirm = this.cooks.find((element) => element.key === value);
      confirm.checked = !confirm.checked;
    },
    changeSort() {
      const sorted = this.cooks.map((cook) => {
        return cook.message;
      });
      sorted.sort();
      const sortedCooks = sorted.map((param) => {
        return this.cooks.find((cook) => {
          return cook.message === param;
        });
      });
      this.cooks = sortedCooks;
    },
    addFunc() {
      const boolemAdd = this.cooks.filter((value) => {
        const filterValue = value.checked;
        return filterValue;
      });
      const nextCooks = [];
      boolemAdd.forEach((each) => {
        const { data } = each;
        data.forEach((param) => {
          const reportData = {};
          reportData.message = param;
          nextCooks.push(reportData);
        });
      });
      nextCooks.forEach((element) => {
        this.testRecord.push(element);
      });
      this.open_func();
    },
    look_nutritionFunc() {
      console.log("ここを押すと栄養素一覧は飛びます");
    },
  },
};
</script>

<style modules>
nb-button {
  background-color: antiquewhite;
}
.top {
  background-color: rgb(174, 228, 230);
  flex-direction: row;
  justify-content: center;
  width: 80%;
  align-items: center;
}
.serchBox {
  border-width: 1;
  flex: 5;
}
.serch {
  border-width: 1;
  flex: 1;
  margin-left: 0.5;
}
.sort {
  margin-left: 5;
  border-width: 1;
  flex: 1;
}
.main {
  width: 100%;
  border-width: 1;
  margin-top: 1;
}
.list {
  background-color: rgb(174, 228, 230);
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-bottom-width: 1;
}
.my_list {
  flex: 3;
}
.serving {
  flex: 2;
  flex-direction: row;
}
.checkbox {
  flex: 2;
}
.look_nutrition {
  flex: 2;
}
.last {
  justify-content: flex-end;
  flex-direction: row;
}
.add_menu {
  margin-top: 1;
  width: 25%;
}
</style>
