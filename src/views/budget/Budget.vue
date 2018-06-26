<template>
  <el-container direction="vertical">
    <h1>Budget!</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Target List">    
        <target-list :on-complete="getCompleteTargets"></target-list>
      </el-tab-pane>
      <el-tab-pane label="Budget Plan">
        <budget-plan></budget-plan>
      </el-tab-pane>
      <el-tab-pane label="Budget Stats">
        <budget-stats></budget-stats>
      </el-tab-pane>
      <el-tab-pane label="Completed Targets">
        <target-list-completed :targets="completedTargets"></target-list-completed>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BudgetStats from './BudgetStats/BudgetStats.vue';
import BudgetPlan from './BudgetPlan/BudgetPlan.vue';
import TargetList from './TargetList/TargetList.vue';
import TargetListCompleted from './CompletedTargets/CompletedTargets.vue';
import BudgetApi, { ITarget } from './api';

export default Vue.extend({
  components: { BudgetStats, TargetList, TargetListCompleted, BudgetPlan },
  data() {
    return {
      completedTargets: [] as ITarget[]
    };
  },
  mounted() {
    this.getCompleteTargets();
  },
  methods: {
    getCompleteTargets() {
      const data = BudgetApi.getCompletedTargets();
      if (data) {
        this.completedTargets = data;
      }
    }
  }
});
</script>

<style>
.el-tabs__nav {
  width: 100%;
}
</style>
