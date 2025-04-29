import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App)

// REMARK: use() allow the use of 3rd-end packages.
app.use(router);

app.mount('#app');
