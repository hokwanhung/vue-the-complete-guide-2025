import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
/* eslint-disable vue/no-unused-components */
import TeamsList from './components/teams/TeamsList.vue';
/* eslint-disable vue/no-unused-components */
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/users',
      component: UsersList,
    }
  ],
  // REMARK: Decide the forth and back with pages - createWebHistory uses the browser default.
  history: createWebHistory(),
});

const app = createApp(App)

// REMARK: use() allow the use of 3rd-end packages.
app.use(router);

app.mount('#app');
