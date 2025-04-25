import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  // REMARK: Can have multiple stores.
  state() {
    return {
      counter: 0,
    };
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
