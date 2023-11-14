<template>
    <div class="container">
        
        <el-date-picker v-model="year_month_day" type="date" placeholder="选择您要查询的日期" />
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
const year_month_day = ref('')
const $axios = inject('$axios')
const monthConvertor = inject("monthConvertor")

const query = () => {
    const values = year_month_day.value.toString().split(" ")
    console.log(values)
    const year = values[3]
    const month = monthConvertor.get(values[1])
    const day = values[2]

    console.log(year, month, day)
    
    const url = `worker/historyAttendance?token=${workerStore.getToken}&year=${year}&month=${month}&worker_id=${workerStore.getWorkerId}&day=${day}`
    $axios({
        method: 'get',
        baseUrl: 'http://localhost:9090',
        url: url
    }).then(() =>{

    })
}


</script>



<style  scoped>
.container{
    width: 100vw;
    height: 60vh;
    padding: 3vh 0;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}



</style>