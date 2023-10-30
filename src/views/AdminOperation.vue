<script setup>
import Layout from '../components/Layout.vue';
import { useAdminStore } from '../store/adminStore'
const store = useAdminStore()

const signIn = () =>{

}


</script>

<template>
    <Layout>
        <template v-slot:main>
            <h2>欢迎你, {{ }}</h2>
            <RouterLink class="link-button" v-for="item of store.operationListData" :to="item.router">{{ item.text }}</RouterLink>
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

.my-link {
    color: white;
    font-weight: bold;
    display: block;
    width: 40vw;
    height: 3.6vh;
    font-size: 2vh;
    background-color: rgb(92, 209, 255);
    border: gray solid 1px;
    border-radius: 2vw;
    text-align: center;
    line-height: 4vh;
}


h2 {
    color: white;
}
</style>