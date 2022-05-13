<template>
    <div class="box">
        <el-page-header :icon="House" title="Home" @back="gohome">
            <template #content>
                JUGEN <span style="color:skyblue">START</span> 巨根<span style="color:skyblue">起始页</span>
            </template>
        </el-page-header>
        <div class="weather">
            <jugen-weather></jugen-weather>
        </div>
        <h1 style="text-align: center;margin-top: 5px;">JUGEN <span style="color:skyblue;">START</span></h1>
        <div class="searchbox">
            <el-select size="large" id="searchselect" class="search" v-model="select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />

            </el-select>
            <el-input v-model="input" placeholder="请输入搜索内容" size="large" id="searchinput" :prefix-icon="Search"
                class="search" @keyup.enter="search">
            </el-input>
            <el-button type="primary" size="large" @click="search" id="searchbtn" class="search" :icon="Search">搜索
            </el-button>
        </div>
        
        </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { House, Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import JugenWeather from './JugenWeather.vue'
const router = useRouter()
const input = ref('')

const gohome = () => {

    router.push({
        path: '/',
    }
    )
}
const options = [
    {
        value:'https://www.baidu.com/s?ie=UTF-8&wd=',
        label:'百度'
    },
    {
        value:'https://search.bilibili.com/all?keyword=',
        label:'哔哩哔哩'
    },
    {
        value:'https://weixin.sogou.com/weixin?type=2&query=',
        label:'搜狗微信'
    }
    
    

]
const select = ref('https://www.baidu.com/s?ie=UTF-8&wd=')

const search = () => {
    if (input.value.length == 0) {
        ElNotification({
            title: "请输入内容",
            message: "你好像啥也没填啊......",
            type: "info",
            duration: 3000,
            position: "top-right",
        })
    }
    else {

        window.location.href = select.value + input.value
        input.value = ''
    }
}

</script>

<style scoped>
.box{
    height:100vh;
    padding-top: 20px;
    padding-left: 20px;
}
.searchbox {
    display: flex;
    justify-content: center;
    margin: 0 15%;

}

.search {
    margin: 0 1%;
}
.weather{
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
}
</style>