import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import { createRouter , createWebHashHistory} from 'vue-router'
import JugenMain from './components/JugenMain.vue'
import JugenStory from './components/JugenStory.vue'
const app = createApp(App)
const routes = [
    {path:'/jugenmain', component: JugenMain},
    {path:'/jugenstory', component: JugenStory},
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