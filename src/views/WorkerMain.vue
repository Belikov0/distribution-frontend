<script setup>
import Layout from '../components/Layout.vue';

</script>

<template>
    
    <Layout>
        <template v-slot:main>
            <el-input v-model="input" placeholder="请输入工号以进入操作页面" />
            <el-button type="primary"><RouterLink to="/worker/operation">登录</RouterLink></el-button>
        </template>

        <template v-slot:footer>
            <el-button type="primary"><RouterLink to="/admin">切换至管理员界面</RouterLink></el-button>
        </template>
    </Layout>

    
</template>

<style scoped>
.button-container {
    margin: 0 auto;
    width: 90vw;

    display: flex;
    flex-wrap: wrap;

}

</style>