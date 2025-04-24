import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/teams', // REMARK: Can do redirect insteaed of assigning same component.
    },
    {
      name: 'teams',
      path: '/teams',
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
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
      // component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter() {
        // REMARK: First global guard, then local router, at last would be component level.
      }
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // REMARK: Only active when using the back button.
      return savedPosition;
    }

    return {
      left: 0,
      top: 0, // return to top.
    }
  },
  // REMARK: Decide the forth and back with pages - createWebHistory uses the browser default.
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  // REMARK: Allow the navigation and perform routing.
  // if (to.name === 'team-members') {
  //   next();
  //   return;
  // }

  // next({
  //   name: 'team-members',
  //   params: {
  //     teamId: 't2'
  //   }
  // });

  next();
})

const app = createApp(App)

// REMARK: use() allow the use of 3rd-end packages.
app.use(router);

app.mount('#app');
