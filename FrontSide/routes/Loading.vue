<template>
  <app-loading v-if="!isAppReady" />
  <app v-else />
</template>

<script>
import Vue from 'vue-native-core';
import { VueNativeBase } from 'native-base';
import { AppLoading } from 'expo';
import App from '../store/AppDisplay';

// ここでNativeBaseのコンポーネントをGlobalに登録
Vue.use(VueNativeBase);

export default {
  components: { App, AppLoading },
  data: function() {
    return {
      isAppReady: false,
    };
  },
  created: function() {
    this.loadFonts();
  },
  methods: {
    loadFonts: async function() {
      try {
        this.isAppReady = false;
        await Expo.Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        //   Ionicons: require('@expo/vector-icons/fonts//Ionicons.ttf'),
        });
        this.isAppReady = true;
      } catch (error) {
        console.log('some error occured', error);
        this.isAppReady = true;
      }
    },
  },
};
</script>