import Vue from 'vue';
import Router from 'vue-router';
import Targets from '../views/budget/TargetList/TargetList.vue';
import CompletedTargets from '../views/budget/CompletedTargets/CompletedTargets.vue';
import BudgetStats from '../views/budget/BudgetStats/BudgetStats.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Targets',
      component: Targets
    },
    {
      path: '/stats',
      name: 'BudgetStats',
      component: BudgetStats,
    },
    {
      path: '/completed',
      name: 'Completed Targets',
      component: CompletedTargets,
    }
  ]
});
