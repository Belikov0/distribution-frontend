<script setup>
import Layout from '../components/Layout.vue';




</script>

<template>
    <Layout>

        <template v-slot:main>
                <input class="text-input" type="text" placeholder="请输入管理员账号" name="username">
                <input class="text-input" type="password" placeholder="请输入管理员密码" name="password">
            <RouterLink class="link-button short-button" to="/worker/operation">登录</RouterLink>
        </template>

        <template v-slot:footer>
            <RouterLink class="link-button short-button" to="/worker">返回</RouterLink>
        </template>
    </Layout>
</template>

<style scoped>

</style>