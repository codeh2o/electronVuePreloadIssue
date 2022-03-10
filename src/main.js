import Vue from 'vue';
import vgl from 'vue-golden-layout';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/global.styl';
// eslint-disable-next-line import/no-extraneous-dependencies

Vue.config.productionTip = false;
Vue.use(vgl);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
