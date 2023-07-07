import { createApp } from 'vue';
import router from './router';
import { VueComposableDevtools } from 'vue-composable';
import { VueQuery } from './vue-query-config';
import App from './App.vue';
import './styles/main.css';

const app = createApp(App);

VueQuery(app);

app.use(router);
app.use(VueComposableDevtools);
app.mount('#app');
