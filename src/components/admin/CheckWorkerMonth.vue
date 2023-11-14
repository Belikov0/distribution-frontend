<template>
    <div class="container">
        <el-form>
            <el-form-item>
                <el-input v-model="worker_id" placeholder="请输入员工编号" />
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="year_month" type="month" format="YYYY/MM" value-format="YYYY-MM"
                    placeholder="选择您要查询的月份" />
            </el-form-item>
        </el-form>

        <div class="table-container">

        </div>

        <el-form-item>
            <el-button type="primary" @click="query">查询</el-button>
            <el-button @click="adminStore.setAllPanelsFalse">取消</el-button>
        </el-form-item>
    </div>
</template>

<script setup>
import { useWorkerStore } from '../../store/workerStore'
import {useAdminStore} from '../../store/adminStore'
import { ref } from 'vue'
import { inject } from 'vue'

const workerStore = useWorkerStore()
const adminStore = useAdminStore()
const worker_id = ref('')
const year_month = ref('')
const $axios = inject('$axios')

const query = () => {
    console.log(worker_id.value,
        year_month.value
    )
}


</script>



<style  scoped></style>