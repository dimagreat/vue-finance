<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-button type="primary" round @click="openCreateTargetDlg">Add Target</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <target-table :open-edit-dlg="onOpenEditTargetDlg" :open-balance-dlg="onOpenTargetBalanceDlg" :open-complete-dlg="onOpenCompleteDlg" :targets="targets"></target-table>
      </el-col>
    </el-row>
    <yes-no-dlg :is-open="isCompleteDlgOpen" :options="completeDlgOptions" :on-ok="onCompleteTarget" :on-close="onCloseCompleteDlg"></yes-no-dlg>
    <update-target-balance-dlg :current-target="currentTarget" :is-open="isUpdateBalanceDlgOpen" :on-close="closeTargetBalanceDlg" :on-update="updateBalance"></update-target-balance-dlg>
    <create-edit-target-dlg :is-edit="createEditTargetDlg.isEdit" :target="currentTarget" :is-open="createEditTargetDlg.isOpen" :on-add="createTarget" :on-edit="editTarget" :on-close="closeCreateTargetDlg"></create-edit-target-dlg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TargetTable, CreateEditTargetDlg, UpdateTargetBalanceDlg } from '../components/target';
import YesNoDlg from '../components/YesNoDlg.vue';

import BudgetApi, { ITarget } from '../api';

export default Vue.extend({
  name: 'TargetList',
  components: { TargetTable, CreateEditTargetDlg, UpdateTargetBalanceDlg, YesNoDlg },
  data() {
    return {
      targets: [] as ITarget[],
      createEditTargetDlg: {
        isOpen: false,
        isEdit: false
      },
      isCompleteDlgOpen: false,
      isUpdateBalanceDlgOpen: false,
      currentTarget: {} as ITarget,
      completeDlgOptions: {
        title: 'Complete Modal',
        bodyText: 'Do you want to move target to "Completed"?'
      }
    };
  },
  mounted() {
    const data = BudgetApi.getTargets();
    if (data) {
      this.targets = data;
    }
  },
  methods: {
    updateBalance(id: string, value: number) {
      const index = this.targets.findIndex(el => el.id === id);
      this.targets[index].balance = value;
      this.saveTargets();
    },
    onOpenTargetBalanceDlg(id: string) {
      this.currentTarget = this.targets.find(el => el.id === id)!;
      this.isUpdateBalanceDlgOpen = true;
    },
    onOpenEditTargetDlg(id: string) {
      this.currentTarget = this.targets.find(el => el.id === id)!;

      this.createEditTargetDlg.isOpen = true;
      this.createEditTargetDlg.isEdit = true;
    },
    openCreateTargetDlg() {
      this.currentTarget = {
        name: '',
        balance: 0,
        price: 0,
        id: ''
      };
      this.createEditTargetDlg.isOpen = true;
      this.createEditTargetDlg.isEdit = false;
    },
    onOpenCompleteDlg(id: string) {
      this.currentTarget = this.targets.find(el => el.id === id)!;
      this.isCompleteDlgOpen = true;
    },
    onCloseCompleteDlg() {
      this.isCompleteDlgOpen = false;
    },
    onCompleteTarget() {
      BudgetApi.completeTarget(this.currentTarget);
      this.removeTarget(this.currentTarget.id);
    },
    removeTarget(id: string) {
      const index = this.targets.findIndex(el => el.id === id);
      this.targets.splice(index, 1);
      this.saveTargets();
    },
    closeTargetBalanceDlg() {
      this.isUpdateBalanceDlgOpen = false;
    },
    closeCreateTargetDlg() {
      this.createEditTargetDlg.isOpen = false;
    },
    createTarget(target: ITarget) {
      this.targets.push(target);
      this.saveTargets();
    },
    editTarget(target: ITarget) {
      if (!this.currentTarget) {
        return;
      }
      const newItem = {
        ...this.currentTarget,
        ...target
      };
      const index = this.targets.findIndex(el => el.id === newItem.id)!;

      Vue.set(this.targets, index, newItem);
      this.saveTargets();
    },
    saveTargets() {
      BudgetApi.setTargets(this.targets);
    }
  }
});
</script>
