<template>
  <el-container direction="vertical">
    <h1>Budget!</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Target List">    
        <target-list></target-list>
      </el-tab-pane>
      <el-tab-pane label="Budget Stats">
        <budget-stats></budget-stats>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BudgetStats from './BudgetStats.vue';
import TargetList from './TargetList.vue';

export default Vue.extend({
  components: { BudgetStats, TargetList }
});
</script>

<style>
.el-tabs__nav {
  width: 100%;
}
</style>
