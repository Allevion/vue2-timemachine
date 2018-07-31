import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
import basepageview from './components/common/basepageview'
import http from "./utils/http";
import objectUtils from "./utils/objectUtils";
import deviceUtils from "./utils/deviceUtils"

Vue.use(Vant);
Vue.component('basepageview',basepageview);

deviceUtils.rem(document, window)
Vue.prototype.http = http;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
	routes
});

import VueLogger from 'vuejs-logger'
const options = {
  isEnabled: process.env.debug,
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel : 'info',
  stringifyArguments : false,
  showLogLevel : false,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};
Vue.use(VueLogger, options);


new Vue({
	router,
	store,
}).$mount('#app');

