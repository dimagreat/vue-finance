<template>
  <el-dialog
    :title="isEdit ? 'Edit Target' : 'Create Target'"
    :visible="isOpen"
    width="30%">
    <el-row type="flex" align="middle">
      <el-col :span="12">
        <p>Enter target name:</p>
      </el-col>
      <el-col :span="8">
        <el-input v-model="target.name"></el-input>
      </el-col>
    </el-row>
    <el-row  type="flex" align="middle">
      <el-col :span="12">
        <p>Enter target price:</p>
      </el-col>
      <el-col :span="8">
        <el-input-number v-model="target.price" :controls=false :min=0></el-input-number>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">Cancel</el-button>
      <el-button type="primary" @click="onAddTarget">{{ isEdit ? "Edit" : "Create" }}</el-button>
    </span> 
  </el-dialog>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'CreateEditTargetDlg',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    onAdd: {
      type: Function,
      required: true
    },
    onEdit: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    target: {
      type: Object,
      required: true
    },
    isEdit: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onAddTarget() {
      if (this.isEdit) {
        this.onEdit(this.target);
      } else {
        this.target.id = this.createId();
        this.onAdd(this.target);
      }
      this.onClose();
    },
    createId() {
      return (
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    }
  }
});
</script>