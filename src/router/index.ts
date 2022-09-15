import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: '/category/:id',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: '/goods/:id',
          component: () => import('@/views/Goods/index.vue')
        }
      ],
    },
    { path: '/login', component: () => import('@/views/Login/index.vue') },
    { path: '/login/callback', component: () => import('@/views/Login/callback.vue') },
    { path: '/test', component: () => import('@/test.vue') },
  ],
  scrollBehavior: () => {
    return { top: 0 };
  },
});

export default router;
