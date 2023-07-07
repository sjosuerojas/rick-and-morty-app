import { createApp } from 'vue';
import router from './router';
import { VueQuery } from './vue-query-config';
import App from './App.vue';
import './styles/main.css';

const app = createApp(App);

VueQuery(app);

app.use(router);
app.mount('#app');
