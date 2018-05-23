import Vue from 'vue';
import Router from 'vue-router';
import top from '@/components/top';
import gallery from '@/components/gallery';
import kon from '@/components/k-on';
import chuni from '@/components/chu-ni';

Vue.use(Router);

const router = new Router({
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

router.afterEach((to, from) => {
  gtag('config', 'UA-68543693-4', {'page_path': to.path });
})

export default router;
