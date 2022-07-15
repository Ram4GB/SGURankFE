import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/index.scss';
import registElement from './element';
import router from './router';

const app = createApp(App);

registElement(app);

app.use(router);

app.mount('#app');