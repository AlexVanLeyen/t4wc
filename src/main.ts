import Vue from 'vue';
import App from '@/pages/app/app.vue';
import router from '@/config/router';
import store from '@/store';
import vuetify from '@/plugin/vuetify';
import '@/config/register-service-worker';
import '@/theme/_all.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
