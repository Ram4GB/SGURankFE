import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import NotFound from './pages/Notfound.vue';
import RankPage from './pages/RankPage.vue';
import ListFaculties from './pages/ListFaculties.vue';
import QA from './pages/QA.vue';
import Contact from './pages/Contact.vue';

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
      path: '/contact-us',
      component: Contact
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    },
  ]
});