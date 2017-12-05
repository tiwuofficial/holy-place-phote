import Vue from 'vue';
import Router from 'vue-router';
import top from '@/components/top';
import gallery from '@/components/gallery';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: top,
    },
    {
      path: '/gallery',
      component: gallery,
    },
  ],
});
