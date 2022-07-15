import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/index.scss';
import registElement from './element';

const app = createApp(App);

registElement(app);

app.mount('#app');