import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import VueParticles from 'vue-particles'  
const app = createApp(App);
app.use(VueParticles);
app.use(router).mount('#app');

// createApp(App).mount('#app')
