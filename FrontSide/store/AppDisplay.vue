<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "vue-native-router";
// import Stack from "../routes/Stack";
import Home from "../components/screens/Home.vue";
import Record from "../components/screens/Record.vue";
import Nutrients from "../components/screens/Nutrients.vue";
import Settings from "../components/screens/Settings.vue";
import Login from "../components/screens/Login.vue";
import SignUp from "../components/pages/Login/SignUp";

const BottomTab = createBottomTabNavigator(
  {
    Home: Home,
    Record: Record,
    Nutrients: Nutrients,
    Settings: Settings,
    DemoLogin: Login,
  }
);

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      BottomTab: { screen: BottomTab },
      SignUp: { screen: SignUp },
    },
    {
      initialRouteName: "BottomTab"
    }
  )
);

export default {
  components: { AppNavigator },
};

</script>