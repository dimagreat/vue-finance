<template>
    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><router-link class="menu-link" to='/'>Target List</router-link></el-menu-item>
        <el-menu-item index="2"><router-link class="menu-link" to='/stats'>Budget Stats</router-link></el-menu-item>
        <el-menu-item index="3"><router-link class="menu-link" to='/completed'>Completed Targets</router-link></el-menu-item>
    </el-menu>
</template>

<script lang="ts">
export default {
  name: 'Navbar'
};
</script>
<style >
.menu-link {
  display: block;
  width: 100%;
  height: 100%;
}
</style>