<template>
    <h1>jugen为什么选择vue？</h1>
    <p>当我看到vue的第一眼时，仅凭它的图标，我就迷上了它。丰富的生态，强大的功能，简洁易学，这是我选它的理由。</p>
    <h2>示例</h2>
    <el-button id="sucbtn" type="primary" size="default" @click="sucnotify('成功','成功',1000)">成功弹窗</el-button>



</template>
<script lang="ts" setup>
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