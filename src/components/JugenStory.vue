<template>
<div class="story">
    <jugen-header></jugen-header>
    
    <h1 class="enter">JUGEN故事<span style="color:skyblue;">重塑</span></h1>
    <p class="enter">JUGEN故事已转移到JUGEN BLOG上。JUGEN BLOG是JUGEN精心打造的博客。</p>
    <div id="jump"><el-button type="primary" size="default" @click="toJugenStory();" id="btn">跳转</el-button>
    </div>
    
    
</div>


</template>
<script lang="ts" setup>
import JugenHeader from './JugenHeader.vue';

const toJugenStory = () => {
    window.open("http://jugen.xyz")
}


</script>

<style scoped>
.story{
    height: 100vh;
    background-color: black;
    color:white;
}
.enter{
    text-align: center;
}
#jump{
    text-align: center;
}
#btn{
    background-color: black;
    border-color: white;
}
</style>