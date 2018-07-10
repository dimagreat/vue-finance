<template>
    <div>
        <navbar></navbar>
        <el-container direction="vertical">
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