<script setup>
import Layout from '../components/Layout.vue';
import CheckSignInOut from '../components/admin/CheckSignInOut.vue'
import CheckWorkerInfo from '../components/admin/CheckWorkerInfo.vue'
import RegisterLeaveBusiness from '../components/admin/RegisterLeaveBusiness.vue'
import RectifyPassword from '../components/admin/RectifyPassword.vue'
import SetSignInOutTime from '../components/admin/SetSignInOutTime.vue'
import CheckWorkerMonth from '../components/admin/CheckWorkerMonth.vue'
import Float from '../components/Float.vue';

import { useAdminStore } from '../store/adminStore'
import { useRouter } from 'vue-router';
import { provide } from 'vue'
import axios from 'axios'
import { useWorkerStore } from '../store/workerStore';
import CheckInformation from '../components/worker/CheckInformation.vue';

const adminStore = useAdminStore()
const workerStore = useWorkerStore()
const router = useRouter()

provide("adminStore", adminStore)
provide("router", router)
provide("workerStore", workerStore)
provide("isAdmin", true)

workerStore.setAllPanelsFalse()
adminStore.setAllPanelsFalse()


const logout = () => {
    adminStore.$reset()
    router.push('/')
}


</script>

<template>
    <Layout>
        <template v-slot:main>
            <h2>欢迎您, 管理员{{ adminStore.getAdminId }}</h2>

            <button class="link-button" @click="adminStore.onClickWorkerInfoPanel">{{ adminStore.operationListData[0].text
            }}</button>
            <button class="link-button" @click="adminStore.onClickSignInOutPanel">{{ adminStore.operationListData[1].text
            }}</button>
            <button class="link-button" @click="adminStore.onClickMonthPanel">{{ adminStore.operationListData[5].text
            }}</button>
            <button class="link-button" @click="adminStore.onClickLeaveBusinessPanel">{{
                adminStore.operationListData[2].text }}</button>
            <button class="link-button" @click="adminStore.onClickSignInOutTimePanel">{{
                adminStore.operationListData[3].text }}</button>
            <button class="link-button" @click="adminStore.onClickPasswordPanel">{{ adminStore.operationListData[4].text
            }}</button>
            

        </template>

        <template v-slot:footer>
            <button class="link-button short-button" type="button" @click="logout">退出</button>
        </template>
    </Layout>

    <Transition name="fade">
        <Float v-if="adminStore.anyPanelOn">
            <CheckWorkerInfo v-if="adminStore.workerInfoPanel"></CheckWorkerInfo>
            <CheckSignInOut v-if="adminStore.signInOutPanel"></CheckSignInOut>
            <SetSignInOutTime v-if="adminStore.signInOutTimePanel"></SetSignInOutTime>
            <RegisterLeaveBusiness v-if="adminStore.leaveBusinessPanel"></RegisterLeaveBusiness>
            <RectifyPassword v-if="adminStore.passwordPanel"></RectifyPassword>
            <CheckWorkerMonth v-if="adminStore.monthPanel"></CheckWorkerMonth>
        </Float>
    </Transition>

    <Transition name="fade">
        <Float v-if="workerStore.anyPanelOn && !adminStore.anyPanelOn">
            <CheckInformation v-if="workerStore.informationPanel" ></CheckInformation>
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
    color: black;
}
</style>