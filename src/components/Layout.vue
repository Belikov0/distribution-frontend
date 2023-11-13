<script setup>


</script>


<template>
    <div id="container">
        <div id="header"><slot name="header"></slot></div>
        <div id="main"><slot name="main"></slot></div>
        <div id="footer"><slot name="footer"></slot></div>
    </div>

</template>


<style scoped>
    #container {
        width: 100vw;
        height: 100vh;
        
        display: flex;
        flex-direction: column;
    }

    #header {
        width: inherit;
        height: 10vh;

        /* background-color: antiquewhite; */
    }

    #main {
        width: inherit;
        height: 75vh;
        padding: 15vh 20vw;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        /* background-color: aqua; */
    }

    #main el-button {
        width: 40vw;
    }

    #footer{
        width: inherit;
        height: 15vh;
        padding: 5vw;


        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        /* background-color: aquamarine; */
    }

    

</style>