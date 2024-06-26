import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../views/UserList.vue';
import UserDetail from '../views/UserDetail.vue';
import UserDashboard from '../views/UserDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
