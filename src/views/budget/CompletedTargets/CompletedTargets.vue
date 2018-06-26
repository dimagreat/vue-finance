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

export default Vue.extend({
  name: 'TargetListCompleted',
  components: { TargetTableCompleted },
  props: {
    targets: {
      type: Array
    }
  }
});
</script>
