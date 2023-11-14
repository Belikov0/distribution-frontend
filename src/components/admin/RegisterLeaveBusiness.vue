<template>
    <div class="container">

        <el-form>
            <el-form-item>
                <el-input v-model="worker_id" placeholder="请输入员工编号" />
            </el-form-item>
            <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="Start date"
                end-placeholder="End date" format="YYYY/MM/DD" value-format="YYYY-MM-DD" />
        </el-form>

        <el-radio-group v-model="registerTarget">
            <el-radio label="leave" size="large">请假</el-radio>
            <el-radio label="business" size="large">出差</el-radio>
        </el-radio-group>
        <el-form-item>
            <el-button type="primary" @click="register">登记</el-button>
            <el-button @click="adminStore.setAllPanelsFalse">取消</el-button>
        </el-form-item>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'


const adminStore = inject("adminStore")
const workerStore = inject("workerStore")
const worker_id = ref("")
const registerTarget = ref('leave')
const date = ref("")

const register = () => {
    console.log(worker_id.value, registerTarget.value, date.value)
}


</script>

<style scoped>
.container {
    background-color: white;
    height: 60vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>