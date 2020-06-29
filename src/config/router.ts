import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home'),
    },
    {
      path: '/comic/:comic_id/:page?',
      name: 'view-comic',
      component: () => import('@/pages/view-comic'),
    },
    {
      path: '/comics',
      name: 'comics',
      component: () => import('@/pages/comics'),
    },
    {
      path: '*',
      name: 'missing',
      component: () => import('@/pages/missing'),
    },
  ],
});
