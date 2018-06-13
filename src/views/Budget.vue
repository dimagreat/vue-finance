<template>
  <el-container direction="vertical">
    <h1>Budget Planning</h1>
    <budget-stats></budget-stats>
    <h2>Targets</h2>
    <el-row :gutter="50">
      <el-col :span="4" :key="key" v-for="(target, key) in targets">
        <target :name="target.name" :price="target.price" :saved="target.saved"></target>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="8">
        <el-button round @click="openCreateTargetDlg">Add Target</el-button>
      </el-col>
      <el-col :span="4">
        <el-button round @click="saveTargets">Save Targets</el-button>
      </el-col>
    </el-row>
    <create-target-dlg v-bind:is-open="isCreateTargetDlgOpen" :on-add="createTarget" :on-close="closeCreateTargetDlg"></create-target-dlg>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BudgetStats from '../components/BudgetStats.vue';
import Target from '../components/Target.vue';
import CreateTargetDlg from '../components/CreateTargetDlg.vue';

import BudgetApi, { ITarget } from '../api';

export default Vue.extend({
  components: { BudgetStats, Target, CreateTargetDlg },
  data() {
    return {
      targets: [] as ITarget[],
      isCreateTargetDlgOpen: false
    };
  },
  mounted() {
    const data = BudgetApi.getTargets();
    if (data) {
      this.targets = data;
    }
  },
  methods: {
    openCreateTargetDlg() {
      this.isCreateTargetDlgOpen = true;
    },
    closeCreateTargetDlg() {
      this.isCreateTargetDlgOpen = false;
    },
    createTarget(target: ITarget) {
      this.targets.push(target);
    },
    saveTargets() {
      BudgetApi.setTargets(this.targets);
    }
  }
});
</script>
