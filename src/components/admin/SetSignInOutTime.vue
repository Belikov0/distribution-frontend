<template>
    <div class="container">
        <el-form label-width="50vw" :label-position="position">
            <el-form-item label="选择设置日期">
                <el-date-picker v-model="daterange" type="daterange" range-separator="至" start-placeholder="Start date"
                    end-placeholder="End date" format="YYYY/MM/DD" value-format="YYYY-MM-DD" />
            </el-form-item>
            <el-form-item label="上班时间">
                <el-time-select v-model="startTime" start="08:00" step="00:15" end="20:00" placeholder="Select time" />
            </el-form-item>
            <el-form-item label="下班时间">
                <el-time-select v-model="endTime" start="08:00" step="00:15" end="20:00" placeholder="Select time" />
            </el-form-item>

            

            <el-form-item label="选择部门">
                <el-select v-model="department_names" multiple placeholder="Select" style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

        </el-form>
        <el-form-item>
            <el-button type="primary" @click="setUp">设置</el-button>
            <el-button @click="adminStore.setAllPanelsFalse">取消</el-button>
        </el-form-item>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { inject } from 'vue'
// 首先应该将部门信息加载到本地，用于初始化选项





const adminStore = inject("adminStore")
const workerStore = inject("workerStore")

const daterange = ref('')
const position = ref('top')
const startTime = ref('')
const endTime = ref('')
const department_names = ref('')

const options = [
    {
        label: '研发部',
        value: '研发部'
    },
    {
        label: '财务部',
        value: '财务部'
    },
    {
        label: '技术部',
        value: '技术部'
    },
    {
        label: '销售部',
        value: '销售部'
    },
]

const setUp = () => {
    console.log(
        daterange.value,
        startTime.value,
        endTime.value,
        department_names.value
    )
}

</script>

<style scoped>
.form {
    width: 90vw;
}
</style>