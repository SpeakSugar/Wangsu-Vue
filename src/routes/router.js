import Vue from 'vue';
import Router from 'vue-router';
import Overview from '../views/document/docEdit/Overview'
import DocVerify from '../views/document/docVerify/DocVerify'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/docEdit', component: Overview
    },
    {
      path: '/docVerify', component: DocVerify
    }
  ]
});

export default router;
