import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/teams', // REMARK: Can do redirect insteaed of assigning same component.
    },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      // alias: '/' // REMARK: Alias also do the same thing, but the url does not change.
      children: [
        // REMARK: In this case, we need a router-view in TeamList.
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          // REMARK: Config the dynamic parameters as props rather than just on $route property.
          props: true,
        },
      ]
    },
    {
      path: '/users',
      component: UsersList,
    },
    // {
    //   path: '/teams/new',
    // }, // REMARK: This should be put first to prevent being recognised as :teamId.
    {
      path: '/:notFound(.*)', // REMARK: Come last because it would override all other routes.
      component: NotFound,
    }
  ],
  linkActiveClass: 'active', // REMARK: Can link the class here in App.vue.
  // REMARK: Decide the forth and back with pages - createWebHistory uses the browser default.
  history: createWebHistory(),
});

const app = createApp(App)

// REMARK: use() allow the use of 3rd-end packages.
app.use(router);

app.mount('#app');
