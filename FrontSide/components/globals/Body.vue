<template>
  <app-navigation></app-navigation>
</template>
<script>
import { createStackNavigator } from "vue-native-router";
import HomeScreen from "../screens/HomeScreen.vue";
import MessagesScreen from "../screens/MessagesScreen.vue";
const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Messages: MessagesScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
export default {
    components: { AppNavigation }
}
</script>