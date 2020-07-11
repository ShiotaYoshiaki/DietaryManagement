// マイ自炊セット登録 (作成者 : 田中)
<template>
  <view>
    <MenuNameTextbox></MenuNameTextbox>
    <MenuList :menu="menu"></MenuList>
  </view>
</template>

<script>
import MenuNameTextbox from "../../../parts/Textbox/MenuNameTextbox";
import MenuList from "../../../parts/List/MenuList";
import MenuRegisterButton from "../../../parts/Button/MenuRegisterButton";
import LookNutritionListButton from "../../../parts/Button/LookNutritionListButton";
import { EMPTY_RECIPE } from "../../../../constants/Records"

export default {
  components: {
    MenuNameTextbox,
    MenuList,
    MenuRegisterButton,
    LookNutritionListButton,
  },
  data: () => {
    return {
      menu: EMPTY_RECIPE,
    };
  },
};
</script>

<style></style>
