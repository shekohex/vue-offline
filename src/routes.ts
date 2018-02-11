import VueRouter from 'vue-router';
import * as Logger from 'js-logger';
import Home from './layouts/home';

export const routes = [{ path: '/', name: 'home', component: Home }];

export const router = new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 } as any),
  linkActiveClass: 'active'
});
