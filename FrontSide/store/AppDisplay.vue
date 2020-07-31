<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";
import * as Stack from "../routes/Stack";
import SignUp from "../components/pages/Login/SignUp";

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      BottomTab: { screen: Stack },
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