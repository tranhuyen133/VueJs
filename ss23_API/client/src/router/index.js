// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import StudentDetail from '../components/StudentDetail.vue';

const routes = [
  {
    path: '/student/:id',
    name: 'StudentDetail',
    component: StudentDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
