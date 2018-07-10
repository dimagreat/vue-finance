<template>
  <div>
    <h1>Budget Stats</h1>
    <el-row>
      <el-col :span="6" :offset="6">
        <el-row type="flex" align="middle">
          <el-col :span="12">
            <p>Enter month income:</p>
          </el-col>
          <el-col :span="4">
            <el-input-number v-model="income" @change="onChangeIncome" :controls=false></el-input-number>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="12">
            <p>Enter per month saving (%):</p>
          </el-col>
          <el-col :span="4">
            <el-input-number v-model="savings" @change="onChangeSavings" :controls=false :max=100 :min=0></el-input-number>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row :span="8">
          <label-value label="Per year income" v-bind:value="totalIncome"></label-value>
        </el-row>
        <el-row :span="8">
          <label-value label="Per month savings" v-bind:value="monthSavings"></label-value>
        </el-row>
        <el-row :span="8">
          <label-value label="Per year savings" v-bind:value="yearSavings"></label-value>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LabelValue from '../../../components/LabelValue.vue';
import BudgetApi from '../api';

export default Vue.extend({
  name: 'BudgetStats',
  components: { LabelValue },
  data() {
    return {
      income: 0,
      savings: 0
    };
  },
  mounted() {
    const data = BudgetApi.getBudgetSettings();
    if (data) {
      this.income = data.income;
      this.savings = data.savings;
    }
  },
  computed: {
    totalIncome(): number {
      return Math.round(this.income * 12);
    },
    monthSavings(): number {
      return Math.round(this.income * (this.savings / 100));
    },
    yearSavings(): number {
      return Math.round(this.totalIncome * (this.savings / 100));
    }
  },
  methods: {
    onChangeIncome(value: number) {
      this.income = value;
      this.onSave();
    },
    onChangeSavings(value: number) {
      this.savings = value;
      this.onSave();
    },
    onSave() {
      BudgetApi.setBudgetSettings({ income: this.income, savings: this.savings });
    }
  }
});
</script>

<style>
.el-row {
  margin-bottom: 30px;
}
</style>
