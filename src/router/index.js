import Vue from 'vue';
import Router from 'vue-router';
import top from '@/components/top';
import gallery from '@/components/gallery';
import kon from '@/components/k-on';
import chuni from '@/components/chu-ni';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: top,
    },
    {
      path: '/gallery',
      component: gallery,
    },
    {
      path: '/k-on',
      component: kon,
    },
    {
      path: '/chu-ni',
      component: chuni,
    },
  ],
});
