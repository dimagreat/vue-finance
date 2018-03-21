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
      <el-col :span="8">
        <label-value label="Per year income" v-bind:value="totalIncome"></label-value>
      </el-col>
      <el-col :span="8">
        <label-value label="Per month savings" v-bind:value="monthSavings"></label-value>
      </el-col>
      <el-col :span="8">
        <label-value label="Per year savings" v-bind:value="totalSavings"></label-value>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import LabelValue from '../components/LabelValue.vue';

export default Vue.extend({
  components: { LabelValue },
  data() {
    return {
      income: 50000,
      savings: 15,
    };
  },
  computed: {
    totalIncome(): number {
      return this.income * 12;
    },
    monthSavings(): number {
      return this.income * (this.savings / 100);
    },
    totalSavings(): number {
      return this.totalIncome * (this.savings / 100);
    },
  },
});
</script>
<style>
.el-row {
  margin-bottom: 30px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
