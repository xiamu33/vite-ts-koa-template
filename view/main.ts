import { createApp } from 'vue';
import App from './App.vue';
import { emitCreateApp } from './utils';
import './styles/index.scss';
import './plugins';

const app = createApp(App);

emitCreateApp(app);

app.mount('#app');
