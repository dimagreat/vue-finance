<template>
    <div>
        <navbar></navbar>
        <el-container direction="vertical">
            <h1>Budget!</h1>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script lang="ts">
import Navbar from './NavBar.vue';

export default {
    name: 'layout',
    components: { Navbar }
};
</script>