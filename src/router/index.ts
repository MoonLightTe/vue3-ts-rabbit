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
      ],
    },
    { path: '/login', component: () => import('@/views/Login/index.vue') },
    { path: '/test', component: () => import('@/test.vue') },
  ],
});

export default router;
