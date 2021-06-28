import { createApp } from 'vue';

import App from './App.vue'
const app = createApp(App)

import BaseCard from './components/layout/BaseCard.vue';

app.component('base-card', BaseCard);
// app.component('alert-error', AlertError);

app.mount('#app');
