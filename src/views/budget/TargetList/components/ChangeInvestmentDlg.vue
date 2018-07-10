<template>
  <el-dialog
    title="Update Target Investment"
    :visible="isOpen"
    width="30%">
    <el-row type="flex" align="middle">
      <el-col :span="12">
        <p>Enter investment (%):</p>
      </el-col>
      <el-col :span="8">
        <el-input-number v-model="invest" :controls=false :min="0" :max="investLeft"></el-input-number>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">Cancel</el-button>
      <el-button type="primary" @click="onUpdateInvestment">Save</el-button>
    </span>
  </el-dialog>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'ChangeInvestmentDlg',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    target: {
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
    },
    investLeft: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      invest: 0
    };
  },
  watch: {
    target() {
      this.invest = this.target.invest;
    }
  },
  methods: {
    onUpdateInvestment() {
      this.onUpdate(this.invest);
      this.onClose();
    }
  }
});
</script>