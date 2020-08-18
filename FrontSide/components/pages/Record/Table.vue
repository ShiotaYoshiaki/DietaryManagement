<template>
  <nb-container :style="stylesObj.container">
    <nb-list>
      <nb-card-item
        v-for="recipe in recipes"
        :key="recipe.key"
        :style="stylesObj.recipeButtonList"
      >
        <nb-button
          :onPress="() => screenTransition(recipe.key)"
          :style="stylesObj.button"
          bordered
        >
          <nb-text :style="stylesObj.recipeButtonMessage">{{
            recipe.message
          }}</nb-text>
        </nb-button>
      </nb-card-item>
    </nb-list>
    <nb-card :style="stylesObj.recordCard">
      <nb-card-item>
        <nb-text>{{ meal }}の献立</nb-text>
      </nb-card-item>
      <nb-list-item
        class="c_recipe_history"
        v-for="record in testRecord"
        :key="record.key"
      >
        <text>{{ record.message }}</text>
      </nb-list-item>
      <nb-button
        :onPress="() => screenTransition(register.key)"
        :style="stylesObj.button"
        bordered
      >
        <nb-text>{{ register.message }}</nb-text>
      </nb-button>
    </nb-card>
  </nb-container>
</template>

<script>
import { MEALS } from "../../../constants/meals";
import {
  INPUT_RECIPE,
  EMPTY_RECIPE,
  MY_SELF_SET_REGISTER,
} from "../../../constants/Records";
import MyCateringRecipeModal from "./MyCateringRecipeModal";
import MyCateringSetModal from "./MyCateringSetModal";

export default {
  data: () => {
    return {
      cooked: MEALS,
      recipes: INPUT_RECIPE,
      testRecord: EMPTY_RECIPE,
      register: MY_SELF_SET_REGISTER,
      isModalActive: false,
      modalContent: "",
      stylesObj: {
        container: {
          flexDirection: "row",
        },
        recipeButtonList: {
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        button: {
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        },
        recipeButtonMessage: {
          fontSize: 16,
        },
        recordCard: {
          flex: 1,
          marginRight: 5,
          paddingBottom: 0,
          marginBottom: 12,
        },
      },
    };
  },
  props: {
    meal: {
      type: String,
    },
  },
  methods: {
    screenTransition(e) {
      this.$emit("transition", e);
    },
  },
};
</script>
