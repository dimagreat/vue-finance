<template>
  <div class="target" @click="openTargetBalance(index)">
    <div class="target-name">{{ name }}</div>
    <div class="target-progress">{{ balance }}/{{ price }}</div>
    <div class="target-complete" :style="{ width: complete + '%' }"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Target',
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    openTargetBalance: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    complete(): number {
      return 100 / (this.price / this.balance);
    }
  },
});
</script>

<style>
.target {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.target-name {
  font-style: italic;
  margin-bottom: 5px;
}
.target-complete {
  position: absolute;
  top: 0;
  left: 0;
  background: #67c23a;
  height: 100%;
}
</style>
