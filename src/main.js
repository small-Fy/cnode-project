import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import axios from "axios";
import http from "./http";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import dayjs from "dayjs";
import lodash from "lodash";

Vue.use(ElementUI);
Vue.prototype.$dayjs=dayjs;
Vue.prototype.$lodash=lodash;
Vue.prototype.$axios = http;
Vue.config.productionTip = false;

// 响应拦截
axios.defaults.timeout = 10000; // 设置超时时间
// 过滤请求结果 只返回结果的data
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
