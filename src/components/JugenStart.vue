<template>
    <div class="box">
        <el-page-header :icon="House" title="Home" @back="gohome" style="padding-top: 20px;padding-left: 20px;">
            <template #content>
                JUGEN <span style="color:skyblue">START</span> 巨根<span style="color:skyblue">起始页</span>

            </template>
        </el-page-header>


        <h1 style="text-align: center;margin-top: 5px;">JUGEN <span style="color:skyblue;">START</span></h1>

        <div class="searchbox">
            <el-select size="large" id="searchselect" class="search" v-model="select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                
            </el-select>
            <el-input v-model="input" placeholder="请输入搜索内容" size="large" id="searchinput" :prefix-icon="Search"
                class="search" @keyup.enter="search();" @click="clickinput()" @input="getapi();clickinput();">
            </el-input>
            <el-button type="primary" size="large" @click="search()" id="searchbtn" class="search" :icon="Search">
            </el-button>
            


        </div>

        <el-card shadow="always" v-show="searchcard" class="el-card" id="el-card" >

				
			<span style="cursor: pointer;">直接搜索 <span style="color:lightskyblue;" @click="search()">{{input}}</span></span>
			<span style="float: right;padding-right: 20px;cursor: pointer;color: gray;" @click="svf();">Close</span>
            
            <p style="cursor: pointer;" v-for="list in suglist" :key="list" @click="clicksearch(list);">{{ list }}</p>


        </el-card>
		<div class="collection">
			<div class="col-header">
				<h3 style="padding-left: 1rem;padding-top:10px;margin-top: 0;margin-bottom: 0;">收藏夹</h3>
				<el-button size="small" style="margin-top: 12px;">+ New</el-button>
			</div>
			
		</div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { House, Search, } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';




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
        value: 'https://www.baidu.com/s?ie=UTF-8&wd=',
        label: '百度',
    },
    {
        value: 'https://search.bilibili.com/all?keyword=',
        label: '哔哩哔哩',

    },
    {
        value: 'https://weixin.sogou.com/weixin?type=2&query=',
        label: '搜狗微信',

    },
    {
        value:'https://so.csdn.net/so/search?q=',
        label:'CSDN'
    }




]
const select = ref('https://www.baidu.com/s?ie=UTF-8&wd=')

const search = () => {
    if (input.value.length==0) {
        ElNotification({
            title: "请输入内容",
            message: "你好像啥也没填啊......",
            type: "info",
            duration: 3000,
            position: "top-right",
        })
    }
    else {

        window.open(select.value + input.value)
        input.value = ''
        suglist.value= []
		searchcard.value=false;
		
		
    }
}

const clicksearch = (list:any) => {
    window.open(select.value + list)
    input.value = ''
    suglist.value= []
	searchcard.value=false
}
let suglist = ref([])


const getapi = () => {

    let api = ref('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+input.value);
	
        //定义回调函数
    (window as any).baidu = {
        sug: function (json: any) {
            // console.log(json.s)
			
            suglist.value = json.s
            // console.log(suglist.value)
        }
    }

    //动态添加JS脚本
    let script = document.createElement("script");
    script.src = api.value;
    document.getElementsByTagName("head")[0].appendChild(script);
    
}




const searchcard = ref(false)
const clickinput = () => {
    if(input.value==''){
        searchcard.value=false
    }
    else{
        searchcard.value=true
    }


}
const svf = () => {
	searchcard.value=false
}

</script>

<style scoped>
.box {
    height: 100vh;

}

.searchbox {
    display: flex;
    justify-content: center;
    margin: 0 1rem;

}

.search {
    margin: 0 1%;
}

#el-card {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    --el-card-padding:0;
}
.col-header{
	display: flex;
	
}
</style>