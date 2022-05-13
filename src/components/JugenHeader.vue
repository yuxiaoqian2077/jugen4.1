<template>
  <div class="welcome">
    <el-backtop :right="100" :bottom="100" />
    <el-menu mode="horizontal" :router="true" style="display: flex;justify-content:flex-start;border-bottom: 0;height: 60px;" background-color="black" text-color="white" active-text-color="#ffd04b">

      <img id="jugenlogo" src="..\assets\jugenlogowhite.jpeg" alt="jugen logo" style="cursor: pointer;" @click="toMain">
      <h2 id="title" @click="toMain">JUGEN Website 巨根网页版</h2>

        <el-menu-item index="/"  class="menuitem" id="mainitem">首页</el-menu-item>
        <el-menu-item index="/jugenstory" class="menuitem" id="storyitem">故事</el-menu-item>
        <el-menu-item index="/jugenstart" class="menuitem" id="startitem">起始页</el-menu-item>
      
    </el-menu>




  </div>
</template>

<script lang="ts" setup>




import { useRouter } from 'vue-router';


const router = useRouter()
const toMain = () => {
  router.push({
    path: '/',
  })
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#title:hover {
  color: rgb(199, 199, 199);
}

#title {
  color: white;
  margin-top: 11px;
  margin-left: 10px;
  margin-bottom: 0px;
  margin-right: 50px;
  cursor: pointer;
}

#jugenlogo {
  margin-top: 6px;
  margin-left: 5px;
  width: 50px;
  height: 50px;
}

#mainitem{
  margin-left: 50%;
}
</style>
