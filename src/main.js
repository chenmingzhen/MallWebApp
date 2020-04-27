// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
/* 引入我的sass */
import 'assets/scss/index.scss';
import 'assets/js/rem';
/* 引入swiper的css样式 */
import 'swiper/css/swiper.css';
import VueLazyload from 'vue-lazyload';
fastclick.attach(document.body);
Vue.config.productionTip = false;
/* 使用懒加载 */
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
