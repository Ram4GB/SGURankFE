import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';
import RankPage from './pages/RankPage.vue';
import ListFaculties from './pages/ListFaculties.vue';
import QA from './pages/QA.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/rank',
      component: RankPage
    },
    {
      path: '/all-faculties',
      component: ListFaculties
    },
    {
      path: '/qa',
      component: QA
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    },
  ]
});