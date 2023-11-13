<script setup>

import Layout from '../components/Layout.vue';
import Float from '../components/worker/Float.vue';
import CheckMonthAttendance from '../components/worker/CheckMonthAttendance.vue'
import { useWorkerStore } from '../store/workerStore'
import { useRouter } from 'vue-router';
import { provide } from 'vue'
import CheckHistoryAttendance from '../components/worker/CheckHistoryAttendance.vue';
import CheckTodayAttendance from '../components/worker/CheckTodayAttendance.vue';
import CheckInformation from '../components/worker/CheckInformation.vue'
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

const monthConvertor = new Map()

for (let i in months) {
    monthConvertor.set(months[i], i + 1)
}


const workerStore = useWorkerStore()
const router = useRouter()

provide("workerStore", workerStore)
provide("router", router)
provide("monthConvertor", monthConvertor)



const logout = () => {
    workerStore.$reset()
    router.push("/")
}






</script>

<template>
    <Layout>
        <template v-slot:main>
            <h2>欢迎你, {{ workerStore.worker.worker_name }}</h2>
            <button class="link-button">{{ workerStore.operationListData[0].text }}</button>
            <button class="link-button">{{ workerStore.operationListData[1].text }}</button>
            <button class="link-button" @click="workerStore.onClickTodayAttendanceButton">{{
                workerStore.operationListData[2].text }}</button>
            <button class="link-button" @click="workerStore.onClickHistoryAttendanceButton">{{
                workerStore.operationListData[3].text }}</button>
            <button class="link-button" @click="workerStore.onClickMonthAttendanceButton">{{
                workerStore.operationListData[4].text }}</button>
            <button class="link-button" @click="workerStore.onClickPersonalInfomationButton">{{ workerStore.operationListData[5].text }}</button>
        </template>

        <template v-slot:footer>
            <button class="link-button short-button" type="button" @click="logout">退出</button>
        </template>
    </Layout>

    <Transition name="fade">
        <Float v-if="workerStore.anyPanelOn">
            <CheckMonthAttendance v-if="workerStore.monthAttendancePanel"></CheckMonthAttendance>
            <CheckHistoryAttendance v-if="workerStore.historyAttendancePanel"></CheckHistoryAttendance>
            <CheckTodayAttendance v-if="workerStore.todayAttendancePanel"></CheckTodayAttendance>
            <CheckInformation v-if="workerStore.informationPanel"></CheckInformation>
        </Float>
    </Transition>
</template>

<style scoped>
.button-container {
    margin: 0 auto;
    width: 90vw;

    display: flex;
    flex-wrap: wrap;
}

h2 {
    color: black;
}

button {
    width: 40vw;
}
</style>