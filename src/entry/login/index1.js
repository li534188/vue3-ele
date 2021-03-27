import { createApp } from 'vue';
import app from './app1.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/index.scss';


createApp(app).use(Vant).mount('#apps');