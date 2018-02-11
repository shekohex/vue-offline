import './polyfill';
import './localisation';
import './style.scss';
import Vue from 'vue';
import Buefy from 'buefy';
import VueLazyload from 'vue-lazyload';
import { Component, Watch } from 'vue-typed';
import VueRouter from 'vue-router';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as axios from 'axios';
import * as VueAxios from 'vue-axios';
import { timeago, formatDate } from './directives/time-ago';
import Config from '@/config.json';
import store from './store';

import { router } from './routes';
import template from './main.vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Buefy);
Vue.use(VueLazyload);
Vue.filter('timeago', timeago);
Vue.filter('formatDate', formatDate);
Vue.config.errorHandler = function(err, vm, info) {
  console.log(err);
};

@Component({
  mixins: [template],
  store,
  components: {},
  router: router
})
class App extends Vue {}

window.onerror = function(errorMsg, url, lineNo, colNo, error) {
  console.log(errorMsg);
};
OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => location.reload()
});
export const app = new App().$mount('#app');
