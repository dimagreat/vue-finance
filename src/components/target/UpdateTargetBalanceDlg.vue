<template>
  <el-dialog
    title="Update Target Balance"
    :visible="isOpen"
    width="30%">
    <el-row>
      <el-col :span="12">
        <p>Enter target balance:</p>
      </el-col>
      <el-col :span="8">
        <el-input-number v-model="balance" :controls=false :min=0></el-input-number>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">Cancel</el-button>
      <el-button type="primary" @click="onUpdateBalance">Save</el-button>
    </span>
  </el-dialog>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'UpdateTargetBalanceDlg',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    currentTarget: {
      type: Object,
      required: true
    },
    onUpdate: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      balance: this.currentTarget.balance
    };
  },
  methods: {
    onUpdateBalance() {
      this.onUpdate(this.currentTarget.index, this.balance);
      this.onClose();
    }
  }
});
</script>