<script setup>

import Layout from '../components/Layout.vue';
import { useWorkerStore } from '../store/workerStore'
const workerStore = useWorkerStore()

const signIn = () =>{

}


</script>

<template>
    <Layout>
        <template v-slot:main>
            <h2>欢迎你, {{ }}</h2>
            <RouterLink class="link-button" v-for="item of workerStore.operationListData" :to="item.router">{{ item.text }}</RouterLink>
        </template>

        <template v-slot:footer>
                <RouterLink class="link-button short-button" to="/worker">返回</RouterLink>
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

h2 {
    color: white;
}
</style>