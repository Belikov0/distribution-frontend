<template>
    <div class="container">
        <el-form :model="form">
            <el-form-item >
                <el-input v-model="form.origin" placeholder="原密码" type="password" />
            </el-form-item>
            <el-form-item >
                <el-input v-model="form.new" placeholder="新密码" type="password" />
            </el-form-item>
            <el-form-item >
                <el-input v-model="form.renew" placeholder="重复新密码" type="password" />
            </el-form-item>
        </el-form>

        <el-form-item>
            <el-button type="primary" @click="onConfirm">确认修改</el-button>
            <el-button @click="adminStore.setAllPanelsFalse">取消</el-button>
        </el-form-item>
    </div>
</template>

<script setup>
import { ref, inject, reactive } from 'vue'

const adminStore = inject("adminStore")


const form = reactive({
    origin: "",
    new: "",
    renew: ""
})
const onConfirm = () => {
    console.log(
        form.origin,
        form.new,
        form.renew
    )
}


</script>

<style scoped></style>