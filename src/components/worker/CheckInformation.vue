<template>
    <div class="container">
        <el-form >
            <el-form-item label="编号">
                <el-input v-model="workerStore.worker.worker_id" :disabled="isAdmin == null" />
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="workerStore.worker.worker_name" :disabled="isAdmin == null" />
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="workerStore.worker.worker_age" :disabled="isAdmin == null" />
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="workerStore.worker.worker_gender" :disabled="isAdmin == null">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                </el-select>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="workerStore.worker.worker_tel" />
            </el-form-item>
            <el-form-item label="部门">
                <el-input v-model="workerStore.worker.depart_name" :disabled="isAdmin == null" />
            </el-form-item>
        </el-form>
        <el-form-item>
            <el-button type="primary" @click="onConfirm">确认</el-button>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue'
import { useWorkerStore } from '../../store/workerStore'
import { ref } from 'vue'
import { inject } from 'vue'

const workerStore = useWorkerStore()
const isAdmin = inject("isAdmin")
const thisWorker = workerStore.worker // 暂时保存未修改属性

const onSubmit = () => {
    
}

const onConfirm = () => {
    // 未提交则不修改
    workerStore.worker = thisWorker
    workerStore.setAllPanelsFalse()
}

</script>

<style scoped>
.container {
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
  