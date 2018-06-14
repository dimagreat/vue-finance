<template>
  <el-container direction="vertical">
    <h1>Budget Planning</h1>
    <budget-stats></budget-stats>
    <target-list></target-list>
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
