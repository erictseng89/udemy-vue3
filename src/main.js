import { createApp } from 'vue';

import App from './App.vue'
const app = createApp(App)

import BaseCard from './components/layout/BaseCard.vue';
import AlertError from './components/ui/AlertError.vue'
import BaseButton from './components/ui/Button.vue';

app.component('base-card', BaseCard);
app.component('alert-error', AlertError);
app.component('base-button', BaseButton);

app.mount('#app');
