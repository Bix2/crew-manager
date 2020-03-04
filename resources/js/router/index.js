import Vue from 'vue';
import VueRouter from 'vue-router';
import Detail from '../views/Detail.vue';
import Dashboard from '../views/Dashboard.vue'
import Hire from '../views/Hire.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/developers/:id',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/developers/hire',
    name: 'Hire',
    component: Hire,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
