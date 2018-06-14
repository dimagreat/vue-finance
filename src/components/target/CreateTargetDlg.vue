<template>
  <el-dialog
    title="Create Target"
    :visible="isOpen"
    width="30%">
    <el-row>
      <el-col :span="12">
        <p>Enter target name:</p>
      </el-col>
      <el-col :span="8">
        <el-input v-model="name"></el-input>
      </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
        <p>Enter target price:</p>
      </el-col>
      <el-col :span="8">
        <el-input-number v-model="price" :controls=false :min=0></el-input-number>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">Cancel</el-button>
      <el-button type="primary" @click="onAddTarget">Create</el-button>
    </span>
  </el-dialog>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'CreateTargetDlg',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    onAdd: {
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
      name: '',
      price: 0
    };
  },
  methods: {
    onAddTarget() {
      this.onAdd({
        name: this.name,
        price: this.price,
        balance: 0
      });
      this.onClose();
    }
  }
});
</script>