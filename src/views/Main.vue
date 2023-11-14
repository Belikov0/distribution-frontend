<script setup>
import Layout from '../components/Layout.vue';
import { ref } from 'vue'
import { useWorkerStore } from '../store/workerStore'
import { useRouter} from 'vue-router';
import { inject } from 'vue';
import { useAdminStore } from '../store/adminStore';

const $axios = inject('$axios')
const workerStore = useWorkerStore()
const adminStore = useAdminStore()
const router = useRouter()



let login_to = ref("worker")
let worker_id = ref()
let admin_id = ref()
let admin_password = ref()

function login(){
    //为空，处理：弹出红字提示输入
    
    // 不为空，处理
    if (login_to.value == "worker"){
        const url = "worker/logIn?worker_id=" + worker_id.value
        $axios({
            method: 'get',
            url: url
        })
        .then(res => {
            if (res.status == '200'){
                workerStore.setWorker(res.data)
                router.push("/worker")
                return
            }
        })
    }   

    if (login_to.value == "admin"){
        const url = "admin/logIn?admin_id=" + admin_id.value
        $axios({
            method: 'get',
            url: url
        })
        .then(res => {
            if (res.status == '200'){
                console.log(res.data)
                adminStore.setAdmin(res.data)
                router.push("/admin")
                return
            }
        })
    }

}


</script>

<template>
    <Layout>
        <template v-slot:main>
            <div class="container">
                <Transition name="fade">
                    <div class="input-container" v-if="login_to == 'worker'">
                        <input v-model="worker_id" class="text-input" type="text" placeholder="请输入工号" name="username">
                    </div>
                </Transition>

                <Transition name="fade">
                    <div class="input-container" v-if="login_to == 'admin'">
                        <input v-model="admin_id" class="text-input" type="text" placeholder="请输入管理员账号" name="username">
                        <input v-model="admin_password" class="text-input" type="password" placeholder="请输入管理员密码" name="password">
                    </div>
                </Transition>
            </div>


            <el-radio-group v-model="login_to" class="radio-container">
                <el-radio label="worker">员工登录</el-radio>
                <el-radio label="admin">管理员登录</el-radio>
            </el-radio-group>

            <button class="link-button short-button" type="button" @click="login">登录</button>
            
        </template>

        <template v-slot:footer>
            <!-- <RouterLink class="link-button short-button" to="/worker">返回</RouterLink> -->
        </template>
    </Layout>
</template>

<style scoped>
.container {
    height: 15vh;
}

.input-container {
    /* background-color: aqua; */
    height: 15vh;
    position: absolute;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}


</style>