<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="5">
        <target-table-completed :targets="targets"></target-table-completed>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TargetTableCompleted from './components/CompletedTargetsTable.vue';

import BudgetApi, { ITarget } from '../api';

export default Vue.extend({
  name: 'TargetListCompleted',
  components: { TargetTableCompleted },
  data() {
    return {
      targets: [] as ITarget[]
    }
  },
  mounted() {
    const data = BudgetApi.getCompletedTargets();
    if (data) {
      this.targets = data;
    }
  }
});
</script>
