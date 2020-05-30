import {
  createBottomTabNavigator,
} from "vue-native-router";
import BottomTab from './BottomTab';

const BottomTabNavigator = createBottomTabNavigator(BottomTab);

export default {
  Home: BottomTabNavigator,
};
