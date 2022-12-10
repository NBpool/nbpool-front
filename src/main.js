import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from './locales/i18n';
import 'normalize.css/normalize.css';
import Element from 'element-ui';
import './style/index.scss';
import './assets/icons'
import '@/permission';
import 'windi.css';
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
