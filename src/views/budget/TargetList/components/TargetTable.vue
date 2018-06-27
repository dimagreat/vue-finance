<template>
  <el-table
    :data="targets"
    :empty-text="tableOptions.emptyMessage"
    :align="tableOptions.align">
    <el-table-column
      label="Name"
      width="200">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Progress">
      <template slot-scope="scope">
        <el-progress :show-text="false" :text-inside="true" :stroke-width="15" status="success" :percentage="Math.round(100 / (scope.row.price / scope.row.balance))"></el-progress>
      </template>
    </el-table-column>
    <el-table-column
      label="Balance"
      width="100">
      <template slot-scope="scope">
        <span >{{ scope.row.balance }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Price"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.price }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Actions">
      <template slot-scope="scope">
        <el-tooltip content="Update target balance" placement="top">
          <el-button
            round
            icon="el-icon-plus"
            @click="openBalanceDlg(scope.row.id)">
          </el-button>
        </el-tooltip>
        <el-tooltip content="Edit target" placement="top">
          <el-button
            round
            icon="el-icon-edit"
            type="danger"
            @click="openEditDlg(scope.row.id)">
          </el-button>
        </el-tooltip>
        <el-tooltip content="Complete target" placement="top">
          <el-button
            :disabled="scope.row.balance !== scope.row.price"
            icon="el-icon-success"
            type="success"
            @click="openCompleteDlg(scope.row.id)"
            round>
          </el-button>
        </el-tooltip>
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
    openCompleteDlg: {
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