<template>
    <jugen-header></jugen-header>
    <h1>jugen为什么选择vue？</h1>
    <p>1</p>
    <h2>示例</h2>
    <el-button id="sucbtn" type="primary" size="default" @click="sucnotify('成功','成功',1000)">成功弹窗</el-button>



</template>
<script lang="ts" setup>
    import JugenHeader from './JugenHeader.vue';
    import { ElNotification } from 'element-plus';

    
    const sucnotify = (title:string,message:string,time:number) =>{
  
        ElNotification({
            title:title,
            message:message,
            type:"success",
            duration:time,
            position:"top-right",
            })
        document.getElementById("sucbtn")?.blur()
    }





</script>

<style scoped>


</style>