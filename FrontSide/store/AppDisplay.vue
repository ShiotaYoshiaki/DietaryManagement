<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from "vue-native-router";
// import Stack from "../routes/Stack";
import Home from "../components/screens/Home.vue";
import Record from "../components/screens/Record.vue";
import Nutrients from "../components/screens/Nutrients.vue";
import Settings from "../components/screens/Settings.vue";
import Login from "../components/screens/Login.vue";
import SignUp from "../components/pages/Login/SignUp";
import UserInfoFix from "../components/pages/Setting/UserInfoFix";
import NewSelfRecipe from "../components/pages/Record/Modal/NewSelfRecipe";
import MySelfList from "../components/pages/Record/Modal/MySelfList";
import MySelfSet from "../components/pages/Record/Modal/MySelfSet";
import SellCooked from "../components/pages/Record/Modal/SellCooked";
import CookPad from "../components/pages/Record/Modal/CookPad";
import MySelfSetRegister from "../components/pages/Record/Modal/MySelfSetRegister";

const BottomTab = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          title: "ホーム",
        },
      },
    }),
    navigationOptions: {
      title: "ホーム"
    },
  },
  Record: {
    screen: createStackNavigator({
      Record: {
        screen: Record,
        navigationOptions: {
          title: "食事記録",
        },
      },
      newSelfRecipe: {
        screen: NewSelfRecipe,
        navigationOptions: {
          title: "新規自炊レシピ",
        },
      },
      mySelfRecipe: {
        screen: MySelfList,
        navigationOptions: {
          title: "マイ自炊レシピ",
        },
      },
      mySelfSet: {
        screen: MySelfSet,
        navigationOptions: {
          title: "マイ自炊セット",
        },
      },
      sellCooked: {
        screen: SellCooked,
        navigationOptions: {
          title: "市販の料理",
        },
      },
      cookPad: {
        screen: CookPad,
        navigationOptions: {
          title: "クックパッドの料理",
        },
      },
      mySelfSetRegister: {
        screen: MySelfSetRegister,
        navigationOptions: {
          title: "マイ自炊セット登録",
        },
      },
    }),
    navigationOptions: {
      title: "食事記録"
    },
  },
  Nutrients: {
    screen: createStackNavigator({
      Nutrients: {
        screen: Nutrients,
        navigationOptions: {
          title: "栄養素",
        },
      },
    }),
    navigationOptions: {
      title: "栄養素"
    },
  },
  Settings: {
    screen: createStackNavigator({
      Settings: {
        screen: Settings,
        navigationOptions: {
          title: "設定",
        },
      },
      UserInfoFix: {
        screen: UserInfoFix,
        navigationOptions: {
          title: "ユーザー情報変更",
        },
      },
    }),
    navigationOptions: {
      title: "設定"
    },
  },
  Login: {
    screen: createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: {
          title: "ログイン",
        },
      },
      SignUp: {
        screen: SignUp,
        navigationOptions: {
          title: "新規会員登録",
        },
      },
    }),
    navigationOptions: {
      title: "ログイン"
    },
  },
});

const AppNavigator = createAppContainer(BottomTab);

export default {
  components: { AppNavigator },
};
</script>
