<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from "vue-native-router";
import DetailsScreen from "./components/screens/DetailsScreen.vue";
import SettingsScreen from "./components/screens/SettingsScreen.vue";

const BottomTabNavigator = createBottomTabNavigator({
  Home: DetailsScreen,
  Record: SettingsScreen,
  Nutrients: DetailsScreen,
  Settings: SettingsScreen,
});

const StackNavigator = createStackNavigator({
  Home: BottomTabNavigator,
});

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
};
</script>
