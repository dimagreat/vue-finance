<template>
  <el-table
    :data="targets"
    :empty-text="tableOptions.emptyMessage"
    :align="tableOptions.align"
    style="width: 80%">
    <el-table-column
      label="Name"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Balance"
      width="180">
      <template slot-scope="scope">
        <span >{{ scope.row.balance }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Price"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.price }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Progress">
      <template slot-scope="scope">
        <el-progress :show-text="false" :text-inside="true" :stroke-width="15" status="success" :percentage="Math.round(100 / (scope.row.price / scope.row.balance))"></el-progress>
      </template>
    </el-table-column>
    <el-table-column
      label="Actions">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="openBalanceDlg(scope.$index)">Update Balance</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="openEditDlg(scope.$index)">Edit Target</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TargetTable',
  props: {
    openBalanceDlg: {
      type: Function,
      required: true
    },
    openEditDlg: {
      type: Function,
      required: true
    },
    targets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tableOptions: {
        align: 'left',
        emptyMessage: 'There is no targets...'
      }
    };
  }
});
</script>