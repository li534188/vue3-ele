import { createApp } from 'vue';
import app from './app.vue';
import Vant from 'vant';
import 'vant/lib/index.css';


createApp(app).use(Vant).mount('#app');