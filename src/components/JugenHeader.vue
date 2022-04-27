<template>
  <div class="welcome">
    <el-backtop :right="100" :bottom="100" />
    <el-menu mode="horizontal" :default-active="dft" :router="true">
      <img id="jugenlogo" src="..\assets\jugenlogo.png" alt="jugen logo" style="cursor: pointer;">
      <h2 id="title">巨根网页版 jugen website</h2>
      
      <el-menu-item index="1" route="/JugenMain">首页</el-menu-item>
      <el-menu-item index="2" route="/JugenStory">故事</el-menu-item>
      
    </el-menu>
    
    
    
    
  </div>
</template>

<script lang="ts" setup>


import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
  onMounted(()=>{
    useRouter().push({
      path:'/jugenmain'
    })
  })

  
  const dft = ref("1")
  
  
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#title:hover{
  color:lightgrey;
}
#title{
  margin-top: 11px;
  margin-left: 10px;
  margin-bottom: 0px;
  margin-right: 50px;
  cursor: pointer;
}
#jugenlogo{
  margin-top: 5px;
  margin-left: 0px;
  width: 50px;
  height: 50px;
}

</style>
