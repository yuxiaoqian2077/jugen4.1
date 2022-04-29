<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import {useRouter,useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
onBeforeMount(()=>{
  if(route.path=='/jugenstart'){
    console.log("this is start")
  }
  else{
    router.push('/jugenmain')
  }
}
)




</script>

<style>
#app {
  /* margin: 0; */
  /* padding: 0; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
