<template>
    <div class="container">
        <el-form>
            <el-form-item>
                <el-input v-model="worker_id" placeholder="请输入员工编号" />
            </el-form-item>
        </el-form>
        <el-form-item>
            <el-button type="primary" @click="query">查询</el-button>
            <el-button @click="adminStore.setAllPanelsFalse">取消</el-button>
        </el-form-item>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'
import { inject } from 'vue'
import Float from '../Float.vue';
import { SelectProps } from 'element-plus/es/components/select-v2/src/defaults';

const adminStore = inject("adminStore")
const workerStore = inject("workerStore")
workerStore.setAllPanelsFalse()
const worker_id = ref("")
const $axios = inject("$axios")


const query = () => {
    if (worker_id.value == ""){
        /** 处理空值 */
        return
    }


    $axios({
        method: 'get',
        url: 'worker/information',
        params: {
            worker_id: worker_id.value,
            token: adminStore.getToken
        }
    })
        .then(res => {
            if (res.status == '200' && res.data != "") {
                workerStore.setWorker(res.data)
                adminStore.setAllPanelsFalse()
                setTimeout(() => {
                    workerStore.onClickPersonalInfomationButton()
                }, 500)
            }else{
                /** 处理非法值 */
                console.log("no such id")
            }
        })
}


</script>
  

<style scoped>
.container {
    background-color: white;
    height: 40vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

}
</style>