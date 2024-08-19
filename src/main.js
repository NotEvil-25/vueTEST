import { createApp } from "vue";
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './main.css';
import App from './App.vue';
import router from './routes/router';
import store from './store';

createApp(App)
    .use(store)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .mount('#app');
