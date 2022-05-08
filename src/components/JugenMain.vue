<template>
    <jugen-header></jugen-header>
    <div class="main">
        <div class="imgs">
            <img src="../assets/jugenlogo.png" id="jugenlogo" alt="jugenlogo">
            <h1 style="margin-top: 75px;font-size:40px;">+</h1>
            <img src="../assets/vuelogo.png" id="vuelogo" alt="vuelogo">
            
        </div>
        
        <h1>jugen+Vue3 </h1>
        <h1> jugen技术飞跃</h1>

        <h1>什么是jugen？</h1>
        <p>jugen是yuxiaoqian2077和xiaomeng联合创办的品牌。</p>
        <h1>jugen为什么选择Vue？</h1>
        <p>Vue简洁，清晰，快速，功能恰好符合我们所期待的定位。而且vue的绿色让我回忆起了我在青青草原的时光。</p>



    </div>



</template>
<script lang="ts" setup>
import JugenHeader from './JugenHeader.vue';




</script>

<style scoped>
#jugenlogo {
    width: 185px;
    height: 190px;
    margin-top: 40px;
}

#vuelogo {
    margin-top: 30px;
    margin-left: 50px;
    
}

.imgs {
    display: flex;
    justify-content: center;
}

.main {

    margin-left: 3%;
}
.words{
    display: inline;
    text-align: center;
}
</style>