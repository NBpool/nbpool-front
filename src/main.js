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
import './assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import plugins from './plugins' // plugins
import { download } from '@/utils/request'
import 'windi.css';

Vue.use(Element);
Vue.use(plugins)
Vue.prototype.download = download
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
