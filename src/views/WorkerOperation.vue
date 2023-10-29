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
            <!-- <button class="myButton" v-for="item of workerStore.operationListData" type="primary"><RouterLink :to="item.router">{{ item.text }}</RouterLink></button> -->
            <RouterLink class="my-link" v-for="item of workerStore.operationListData" :to="item.router">{{ item.text }}</RouterLink>
        </template>

        <template v-slot:footer>
            <el-button type="primary">
                <RouterLink to="/worker">返回</RouterLink>
            </el-button>
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

.my-link {
    color: white;
    font-weight: bold;
    display: block;
    width: 40vw;
    height: 3.6vh;
    font-size: 2vh;
    background-color: rgb(114, 215, 255);
    border: gray solid 1px;
    border-radius: 2vw;
    text-align: center;
    line-height: 4vh;
}


h2 {
    color: white;
}
</style>