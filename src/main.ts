import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQuery } from './vue-query-config';
import router from './router';
import App from './App.vue';
import './styles/main.css';

const app = createApp(App);
const pinia = createPinia();

VueQuery(app);
app.use(pinia);
app.use(router);
app.mount('#app');
