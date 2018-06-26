<template>
  <el-table
    :data="targets"
    :empty-text="tableOptions.emptyMessage"
    :align="tableOptions.align">
    <el-table-column
      label="Name"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Price"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.price }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TargetTableCompleted',
  props: {
    targets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tableOptions: {
        align: 'left',
        emptyMessage: 'There is no completed targets...'
      }
    };
  }
});
</script>