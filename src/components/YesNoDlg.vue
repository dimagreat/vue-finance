<template>
  <el-dialog
    :title="options.title"
    :visible="isOpen"
    width="30%">
    <el-row type="flex" align="middle">
      <div>
        {{ options.bodyText || '' }}
      </div>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose"> {{ options.cancelText || 'Cancel' }} </el-button>
      <el-button type="primary" @click="onYes">{{ options.okText || 'Ok' }}</el-button>
    </span> 
  </el-dialog>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'YesNoDlg',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    onOk: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  methods: {
    onYes() {
      this.onOk();
      this.onClose();
    }
  }
});
</script>