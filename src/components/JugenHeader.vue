<template>
  <div class="welcome">
    
    <div class="header">

      <img id="jugenlogo" src="..\assets\jugenlogowhite.jpeg" alt="jugen logo" style="cursor: pointer;" @click="toMain">
      <h2 id="title" @click="toMain">JUGEN Website 巨根网页版</h2>
    <div class="item">
      <h3 id="mainitem" @click="to('')">首页</h3>
      <h3 class="menuitem" id="storyitem" @click="to('jugenstory')">故事</h3>
      <h3 class="menuitem" id="startitem" @click="to('jugenstart')">起始页</h3>
      
    </div>
      
    </div>




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

const to = (rt:any) => {
  router.push({
    path: '/'+rt,
  })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  /* display: flex;
  justify-content:flex-start; */
  display: flex;
  border-bottom: 0;
  height: 60px;
  background-color: black;
}
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
.item{
  display: flex;
}
#mainitem{
  cursor: pointer;
  color:white;
  margin-top: 0;
  padding-top: 15px;
}
.menuitem{
  cursor: pointer;
  color:white;
  margin-top: 0;
  padding-top: 15px;
  padding-left: 10px;
}
</style>
