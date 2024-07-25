import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css';
import toast from './plugins/toast';

const app = createApp(App);

app.use(router);
toast(app);

app.mount('#app');
