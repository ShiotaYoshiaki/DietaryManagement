<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";
import * as Stack from "../routes/Stack";

const StackNavigator = createStackNavigator(Stack.default);
const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
};

</script>