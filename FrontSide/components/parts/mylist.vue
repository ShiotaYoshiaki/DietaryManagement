<template>
  <view>
    <view v-for="cook in cooks" :key="cook.key">
      <nb-text class="message_size">{{ cook.message }}</nb-text>
    </view>
  </view>
</template>
<script>
// import { Mylist } from "../../constants/MyList";
import sort from "./sort";
export default {
  props: {
    cooks: {
      type: Array,
    },
  },
  methods: {
    ChangedCooks() {
      const sorted = this.cooks.map((cook) => cook.message);
      sorted.sort();
      const nextcooks = sorted.map((param) => {
        return this.cooks.find((cook) => {
          return cook.message === param;
        });
      });
      this.cooks = nextcooks;
      this.$emit("toCateringSet");
    },
  },
  components: {
    sort,
  },
};
</script>

<style modules>
.margin {
  margin-top: 20;
  font-size: 7;
  border-width: 3;
  color: black;
}
.sort_button {
  width: 35%;
  height: 20px;
  position: absolute;
  top: -30;
  right: 0;
}
.sort_container {
  background-color: red;
  position: relative;
}
.message_size{
  font-size: 12;
}
</style>
