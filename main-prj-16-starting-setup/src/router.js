import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      // REMARK: So the component can actually get ':id' as props.
      props: true,
      // REMARK: Need to add a router-view in CoachDetail for children to work.
      children: [
        { path: 'contact', component: ContactCoach },
      ]
    },
    {
      path: '/register',
      component: CoachRegistration,
    },
    {
      path: '/requests',
      component: RequestReceived,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    }
  ],
});

export default router;