import { createRouter, createWebHashHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import Notfound from './pages/Notfound.vue';
import Rank from './pages/Rank.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/:pathMatch(.*)',
      component: Notfound
    }
  ]
});