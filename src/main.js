import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store';
import Vuex from 'vuex';


Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
