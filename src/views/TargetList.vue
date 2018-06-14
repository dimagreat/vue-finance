<template>
  <div>
    <h2>Targets</h2>
    <el-row :gutter="50">
      <div v-if="targets.length === 0">There is no targets</div>
      <el-col :span="4" :offset="1" :key="key" v-for="(target, key) in targets">
        <target :open-target-balance="onOpenTargetBalanceDlg" :index="key" :name="target.name" :price="target.price" :balance="target.balance"></target>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="8">
        <el-button round @click="isCreateTargetDlgOpen = true">Add Target</el-button>
      </el-col>
      <el-col :span="4">
        <el-button round @click="saveTargets">Save Targets</el-button>
      </el-col>
    </el-row>
    <update-target-balance-dlg :current-target="currentTarget" :is-open="isUpdateBalanceDlgOpen" :on-close="closeTargetBalanceDlg" :on-update="updateBalance"></update-target-balance-dlg>
    <create-target-dlg :is-open="isCreateTargetDlgOpen" :on-add="createTarget" :on-close="closeCreateTargetDlg"></create-target-dlg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Target from '../components/target/Target.vue';
import CreateTargetDlg from '../components/target/CreateTargetDlg.vue';
import UpdateTargetBalanceDlg from '../components/target/UpdateTargetBalanceDlg.vue';

import BudgetApi, { ITarget } from '../api';

export default Vue.extend({
  name: 'TargetList',
  components: { Target, CreateTargetDlg, UpdateTargetBalanceDlg },
  data() {
    return {
      targets: [] as ITarget[],
      isCreateTargetDlgOpen: false,
      isUpdateBalanceDlgOpen: false,
      currentTarget: {}
    };
  },
  mounted() {
    const data = BudgetApi.getTargets();
    if (data) {
      this.targets = data;
    }
  },
  methods: {
    updateBalance(index: number, value: number) {
      this.targets[index].balance = value;
    },
    onOpenTargetBalanceDlg(index: number) {
      this.currentTarget = {
        index,
        balance: this.targets[index].balance
      };
      this.isUpdateBalanceDlgOpen = true;
    },
    closeTargetBalanceDlg() {
      this.isUpdateBalanceDlgOpen = false;
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
