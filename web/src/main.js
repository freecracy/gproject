import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from '@/App.vue'
import router from '@/router/router.js'

Vue.use(VueAxios, axios);
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV || 'development'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
