<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <p>Enter month income</p>
        <el-input-number v-model="income" :controls=false></el-input-number>
      </el-col>
      <el-col :span="12">
        <p>Enter month saving percent</p>
        <el-input-number v-model="savings" :controls=false :max=100 :min=0></el-input-number>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-button type="primary" v-on:click=calcSavings>Calculate savings</el-button>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <span>Per year income: </span>
        <span>{{ totalIncome }}</span>
      </el-col>
      <el-col :span="8">
        <span>Per month savings: </span>
        <span>{{ monthSavings }}</span>
      </el-col>
      <el-col :span="8">
        <span>Per year savings: </span>
        <span>{{ totalSavings }}</span>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Budget',
  data() {
    return {
      income: 50000,
      savings: 0,
      totalSavings: 0,
      totalIncome: 0,
      monthSavings: 0,
    };
  },
  methods: {
    calcSavings() {
      const savingsPercent = this.savings / 100;
      this.totalIncome = this.income * 12;
      this.monthSavings = this.income * savingsPercent;
      this.totalSavings = this.totalIncome * savingsPercent;

    },
  },
});
</script>
<style>
.el-row {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
