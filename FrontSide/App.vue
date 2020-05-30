<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";
import HomeScreen from "./components/screens/HomeScreen.vue";
import MessagesScreen from "./components/screens/MessagesScreen.vue";11


const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Messages: MessagesScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
    components: { AppNavigator }
}
</script>