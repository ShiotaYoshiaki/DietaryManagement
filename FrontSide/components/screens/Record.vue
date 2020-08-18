<template>
  <nb-container>
    <nb-header>
      <nb-body>
        <nb-date-picker
          :defaultDate="defaultDate"
          :minimumDate="minimumDate"
          :maximumDate="maximumDate"
          :modalTransparent="false"
          animationType="fade"
          androidMode="default"
          :textStyle="stylesObj.dateText"
          :textContent="date"
          :onDateChange="setDate"
          :formatChosenDate="
            (date) => moment(date).format('YYYY年MM月DD日(ddd)')
          "
        />
      </nb-body>
    </nb-header>

    <nb-tabs>
      <nb-tab v-for="cook in cooked" :key="cook.key" :heading="cook.message">
        <Table
          @transition="(e) => this.props.navigation.navigate(e)"
          :meal="cook.message"
        />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>
import Table from "../pages/Record/Table";
import { MEALS } from "../../constants/meals";
import React from "react";
import moment from "moment";
const now = new Date();

export default {
  components: { Table },
  data: () => {
    return {
      moment,
      cooked: MEALS,
      defaultDate: now,
      minimumDate: new Date("2020-01-01"),
      maximumDate: new Date("2100-12-31"),
      chosenDate: now,
      date: now,
      stylesObj: {
        dateText: {
          color: "#1e90ff",
        },
        chenge: {
          position: "absolute",
          fontSize: 15,
          left: 0,
        },
      },
    };
  },
  methods: {
    screenTransition(e) {
      this.props.navigation.navigate(e);
    },
    setDate(newDate) {
      this.chosenDate = newDate;
    },
  },
};
</script>

<style></style>
