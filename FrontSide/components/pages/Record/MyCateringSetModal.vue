<template>
  <view>
    <view class="Top">
      <view class="SerchBox">
        <text-input v-model="keyword" :on-change="(e) => changeKeyword(e)" />
      </view>
      <view class="serch">
        <nb-button :on-press="searchFunc">
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
          <text>{{ cook.SetMenu }}</text>
        </view>
        <view class="Serving">
          <text-input v-model="number" type="number" />
          <text>人前</text>
        </view>
        <view class="CheckBox">
          <nb-checkbox
            :checked="cook.checked"
            :on-press="() => (cook.checked = !cook.checked)"
          ></nb-checkbox>
        </view>
        <view class="Look_nutrition">
          <nb-button :on-press="Look_nutritionFunc">
            <text>栄養素を見る</text>
          </nb-button>
        </view>
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
      const mapedBoolemAdd = boolemAdd.map((value) => {
        const pushObject = {};
        value.data.forEach((element) => {
          pushObject.message = element;
        });
        return pushObject;
      });
      console.log(mapedBoolemAdd);
      mapedBoolemAdd.forEach((element) => {
        this.testRecord.push(element);
      });
      this.open_func();
    },
    Look_nutritionFunc() {
      console.log("ここを押すと栄養素一覧は飛びます");
    },
  },
};
</script>

<style modules>
nb-button {
  background-color: antiquewhite;
}
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
  width: 100%;
  border-width: 1;
  margin-top: 1;
}
.List {
  background-color: rgb(174, 228, 230);
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-bottom-width: 1;
}
.My_list {
  flex: 3;
}
.Serving {
  flex: 2;
  flex-direction: row;
}
.CheckBox {
  flex: 2;
}
.Look_nutrition {
  flex: 2;
}
.Last {
  justify-content: flex-end;
  flex-direction: row;
}
.Add_menu {
  margin-top: 1;
  width: 25%;
}
</style>
