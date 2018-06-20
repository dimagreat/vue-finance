<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="5">
        <target-table :open-edit-dlg="onOpenEditTargetDlg" :open-balance-dlg="onOpenTargetBalanceDlg" :targets="targets"></target-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="8">
        <el-button type="primary" round @click="openCreateTargetDlg">Add Target</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" round @click="saveTargets">Save Targets</el-button>
      </el-col>
    </el-row>
    <update-target-balance-dlg :current-target="currentTarget" :is-open="isUpdateBalanceDlgOpen" :on-close="closeTargetBalanceDlg" :on-update="updateBalance"></update-target-balance-dlg>
    <create-edit-target-dlg :is-edit="createEditTargetDlg.isEdit" :target="currentTarget" :is-open="createEditTargetDlg.isOpen" :on-add="createTarget" :on-edit="editTarget" :on-close="closeCreateTargetDlg"></create-edit-target-dlg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TargetTable, CreateEditTargetDlg, UpdateTargetBalanceDlg } from '../components/target';

import BudgetApi, { ITarget } from '../api';

export default Vue.extend({
  name: 'TargetList',
  components: { TargetTable, CreateEditTargetDlg, UpdateTargetBalanceDlg },
  data() {
    return {
      targets: [] as ITarget[],
      createEditTargetDlg: {
        isOpen: false,
        isEdit: false
      },
      isUpdateBalanceDlgOpen: false,
      currentTarget: {} as ITarget
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
        ...this.targets[index],
        index
      };
      this.isUpdateBalanceDlgOpen = true;
    },
    onOpenEditTargetDlg(index: number) {
      this.currentTarget = {
        ...this.targets[index],
        index
      };
      this.createEditTargetDlg.isOpen = true;
      this.createEditTargetDlg.isEdit = true;
    },
    openCreateTargetDlg() {
      this.currentTarget = {
        name: '',
        balance: 0,
        price: 0
      };
      this.createEditTargetDlg.isOpen = true;
      this.createEditTargetDlg.isEdit = false;
    },
    closeTargetBalanceDlg() {
      this.isUpdateBalanceDlgOpen = false;
    },
    closeCreateTargetDlg() {
      this.createEditTargetDlg.isOpen = false;
    },
    createTarget(target: ITarget) {
      this.targets.push(target);
    },
    editTarget(target: ITarget) {
      if (!this.currentTarget) {
        return;
      }
      const newItem = {
        ...this.currentTarget,
        ...target
      };
      Vue.set(this.targets, this.currentTarget.index!, newItem);
    },
    saveTargets() {
      BudgetApi.setTargets(this.targets);
    }
  }
});
</script>
