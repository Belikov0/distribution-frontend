<script setup>
import Layout from '../components/Layout.vue';

</script>

<template>
    
    <Layout>
        <template v-slot:main>
            <input class="text-input" type="text" placeholder="请输入工号以进入操作页面" name="username">
            <RouterLink class="link-button short-button" to="/worker/operation">登录</RouterLink>
        </template>

        <template v-slot:footer>
            <RouterLink class="link-button" to="/admin">切换至管理员界面</RouterLink>
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