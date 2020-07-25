<template>
  <view>
    <nb-button :on-press="changeSort" class="sort_button">
     <FontAwesome name="random" size=25 color="rgb(121, 211, 218)" />
    </nb-button>
  </view>
</template>
<script>
import { Ionicons, FontAwesome } from "@expo/vector-icons";
export default {
  methods: {
    changeSort() {
      this.$emit("changeCooks");
    },
  },
  components: {
    Ionicons,
    FontAwesome,
  },
};
</script>
<style modules>
.sort_button {
  margin-left: 10;
  width: 30;
  background-color: rgb(0, 10, 2);
}
</style>
