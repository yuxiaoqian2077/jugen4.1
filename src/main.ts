import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import { createRouter , createWebHashHistory } from 'vue-router'
import JugenMain from './components/JugenMain.vue'
import JugenStory from './components/JugenStory.vue'
import JugenStart from './components/JugenStart.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'



const app = createApp(App)
const routes = [
    {path:'/', component: JugenMain,name:'JugenMain'},
    // {path:'/jugenmain', component: JugenMain ,name:'JugenMain'},
    {path:'/jugenstory', component: JugenStory ,name:'JugenStory'},
    {path:'/jugenstart', component: JugenStart ,name:'JugenStart'},
]

const route = createRouter({
    history:createWebHashHistory(),
    routes:routes
})
app.use(route)




app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')
app.use(VueAxios, axios)

