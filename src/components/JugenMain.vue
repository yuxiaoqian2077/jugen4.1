<template>

    <div class="main">
        
        
        <!-- <div class="imgs">
            <img src="../assets/jugenlogo.png" id="jugenlogo" alt="jugenlogo">
            <h1 style="margin-top: 75px;font-size:40px;">+</h1>
            <img src="../assets/vuelogo.png" id="vuelogo" alt="vuelogo">
            
        </div> -->

        <div class="startpage">
        <jugen-header></jugen-header>
            <h1 style="font-size: 75px;color: white;padding-top: 50px;padding-left: 50px;" id="jugen-big">JUGEN</h1>
            <h1 style="padding-left: 50px;padding-bottom: 30px;font-style: italic;font-size: 40px;"
                id="jugen-introwords">WHERE THE<br>TEENS
                BUILD<br>THEIR DREAMS
            </h1>
            <el-button type="primary" size="default" @click="toGithub"
                style="margin-left: 50px;background-color:transparent;color: white;font-size: 20px;font-family: Avenir;padding: 20px;"
                id="BtntoGithub" plain round>
                See Code On Github
            </el-button>

        </div>
        <div class="intropage">
            <h1 style="font-size: 65px;">简介</h1>
            <h1 style="margin-top:0">什么是JUGEN？</h1>
            <p>JUGEN是yuxiaoqian2077和xiaomeng联合创办的品牌。</p>
            <h1>为什么它这么不出名？</h1>
            <p>自始至终，他都是我们内部的一个小品牌，没有做太多宣传。现在，我们有很大自信，选择将它公之于众。</p>
            
        </div>


    </div>



</template>
<script lang="ts" setup>


import JugenHeader from './JugenHeader.vue';

const toGithub = () => {
    window.location.href = "https://github.com/yuxiaoqian2077/jugen4.1"
}






</script>

<style scoped>
/* #jugenlogo {
    width: 185px;
    height: 190px;
    margin-top: 40px;
}

#vuelogo {
    margin-top: 30px;
    margin-left: 50px;
    
} */

/* .imgs {
    display: flex;
    justify-content: center;
} */

.main {
    color: white;

    scroll-snap-type: y mandatory;
    
    /* 需要把滚动条设置到直接父容器，
        scroll-snap-type 才能生效，
        默认是在 body 上，现在是 main 上 */
    overflow: scroll;
    height: 100vh;
    background-color: black;


}

/* .words{
    display: inline;
    text-align: center;
} */
@keyframes jugen-introwords-enter {
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
}

@-webkit-keyframes jugen-introwords-enter {
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
}

#jugen-introwords {
    animation: jugen-introwords-enter 1.3s;
}

#jugen-big {
    animation: jugen-introwords-enter 1.3s;
}

#BtntoGithub {
    animation: jugen-introwords-enter 1.3s;
}

.startpage {
    width: 100%;
    height: 100vh;

    scroll-snap-align: start;
    background-color: black;
    background-image: url("../assets/sky.jpg");
    background-repeat: no-repeat;
    background-size: 100%;

}

.intropage {
    padding-left: 20px;
    width: 100%;
    height: 100vh;

    scroll-snap-align: start;
    
    background-color: black;

}
</style>