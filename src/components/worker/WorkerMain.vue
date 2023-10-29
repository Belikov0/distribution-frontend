<script setup>

</script>

<template>
    <div class="button-container">
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
    </div>
</template>

<style scoped>
.button-container {
    margin: 0 auto;
    width: 90vw;

    display: flex;
    flex-wrap: wrap;

}
</style>