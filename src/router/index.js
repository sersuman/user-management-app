import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/UserDashboard.vue';
import UserList from '../views/UserList.vue';
import UserDetail from '../views/UserDetail.vue';
import AddUser from '../views/AddUser.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
  },
  {
    path: '/add',
    name: 'AddUser',
    component: AddUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
