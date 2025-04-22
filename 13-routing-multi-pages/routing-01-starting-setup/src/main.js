import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/users',
      component: UsersList,
    },
    // {
    //   path: '/teams/new',
    // }, // REMARK: This should be put first to prevent being recognised as :teamId.
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      // REMARK: Config the dynamic parameters as props rather than just on $route property.
      props: true,
    },
  ],
  // REMARK: Decide the forth and back with pages - createWebHistory uses the browser default.
  history: createWebHistory(),
});

const app = createApp(App)

// REMARK: use() allow the use of 3rd-end packages.
app.use(router);

app.mount('#app');
