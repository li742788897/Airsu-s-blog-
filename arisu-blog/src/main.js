import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import VueParticles from 'vue-particles'  
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/components/reset.css'
const app = createApp(App);
app.use(VueParticles);
app.use(ElementPlus)
app.use(router).mount('#app');

// createApp(App).mount('#app')
