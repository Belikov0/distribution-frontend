<template>
    <div class="container">
        
        <el-date-picker v-model="year_month" type="month" placeholder="选择您要查询的月份" />
        <div class="table-container">

        </div>
        <button class="link-button" @click="query" >查询</button>
        <button class="link-button" @click="workerStore.setAllPanelsFalse">返回</button>
    </div>
    
</template>

<script setup>
import { useWorkerStore } from '../../store/workerStore'
import { ref } from 'vue'
import { inject } from 'vue'

const workerStore = useWorkerStore()
const year_month = ref('')
const $axios = inject('$axios')
const monthConvertor = inject("monthConvertor")

const query = () => {
    const values = year_month.value.toString().split(" ")
    const year = values[3]
    const month = monthConvertor.get(values[1])
    
    const url = `worker/monthlyAttendance?token=${workerStore.getToken}&year=${year}&month=${month}&worker_id=${workerStore.getWorkerId}`
    $axios({
        method: 'get',
        baseUrl: 'http://localhost:9090',
        url: url
    }).then(() =>{

    })
}


</script>



<style  scoped>


</style>