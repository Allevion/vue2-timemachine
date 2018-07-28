import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
import basepageview from './components/common/basepageview'
import http from "./utils/http";
import utils from "./utils/utils";
import deviceUtils from "./utils/deviceUtils"

Vue.use(Vant);
Vue.component('basepageview',basepageview);

deviceUtils.rem(document, window)

Vue.prototype.http = http;
async function autologin(){
  if (!(utils.isEmpty(store.state.token))) {
    let res = await http.requestJson({
      url:"/user/auto_login",
      params:{
        "access_token":store.state.token
      }
    });
    store.dispatch("UserLogin",res)
  }
}
autologin();

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
	routes
});

import VueLogger from 'vuejs-logger'
const options = {
  isEnabled: process.env.debug,
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : false,
  separator: '|',
  showConsoleColors: true
};
Vue.use(VueLogger, options);


new Vue({
	router,
	store,
}).$mount('#app');
