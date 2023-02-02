import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import request from './request/request'
import VueParticles from 'vue-particles'  
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/components/reset.css'
const app = createApp(App);
app.use(VueParticles);
app.use(ElementPlus)
app.config.globalProperties.$http = request();
app.use(router).mount('#app');
// createApp(App).mount('#app')
