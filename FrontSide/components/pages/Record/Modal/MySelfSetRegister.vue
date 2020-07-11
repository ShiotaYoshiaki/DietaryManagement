// マイ自炊セット登録 (作成者 : 田中)
<template>
  <view>
    <MenuNameTextbox></MenuNameTextbox>
  </view>
</template>

<script>
import MenuNameTextbox from "../../../parts/Textbox/MenuNameTextbox";
import MenuList from "../../../parts/List/MenuList";
import MenuRegisterButton from "../../../parts/Button/MenuRegisterButton";
import LookNutritionListButton from "../../../parts/Button/LookNutritionListButton";

export default {
  components: {
    MenuNameTextbox,
    MenuList,
    MenuRegisterButton,
    LookNutritionListButton,
  },
};
</script>

<style></style>
