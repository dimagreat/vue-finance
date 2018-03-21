import Vue from 'vue';
import Router from 'vue-router';
import Budget from './views/Budget.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Budget',
      component: Budget,
    },
  ],
});
