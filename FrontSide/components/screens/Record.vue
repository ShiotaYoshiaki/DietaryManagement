<template>
  <nb-container>
    <nb-header>
      <nb-body>
        <nb-text>食事記録</nb-text>
      </nb-body>
    </nb-header>

    <nb-tabs>
      <nb-tab v-for="cook in cooked" :key="cook.key" :heading="cook.message">
        <Table @transition="(e) => this.props.navigation.navigate(e)" :meal="cook.message"/>
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>
import Table from "../pages/Record/Table";
import { MEALS } from "../../constants/meals";

export default {
  components: { Table },
  data: () => {
    return {
      cooked: MEALS,
    };
  },
  methods: {
    screenTransition(e) {
      this.props.navigation.navigate(e);
    },
  }
};
</script>

<style></style>
