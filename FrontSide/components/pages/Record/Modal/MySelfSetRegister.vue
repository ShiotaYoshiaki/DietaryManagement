// マイ自炊セット登録 (作成者 : 田中)
<template>
  <view>
    <MenuNameTextbox></MenuNameTextbox>
    <MenuList :menu="menu"></MenuList>
    <view class="flex">
      <LookNutritionButton></LookNutritionButton>
      <MenuRegisterButton></MenuRegisterButton>
    </view>
  </view>
</template>

<script>
import MenuNameTextbox from "../../../parts/Textbox/MenuNameTextbox";
import MenuList from "../../../parts/List/MenuList";
import MenuRegisterButton from "../../../parts/Button/MenuRegisterButton";
import LookNutritionButton from "../../../parts/Button/LookNutritionButton";
import { EMPTY_RECIPE } from "../../../../constants/Records"

export default {
  components: {
    MenuNameTextbox,
    MenuList,
    MenuRegisterButton,
    LookNutritionButton,
  },
  data: () => {
    return {
      menu: EMPTY_RECIPE,
    };
  },
};
</script>

<style>

.flex {
  flex-direction: row;
}

</style>
