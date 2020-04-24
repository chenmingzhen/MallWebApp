import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = [{
                  name: 'home',
                  path: '/home',
                  /* vue懒加载 */
                  component: () => import('pages/home'),
                  /* 子路由 */
                  children: [{
                    name: 'home-product',
                    path: 'product/:id',
                    component: () => import('pages/product')
                  }]
                },
                {
                  name: 'category',
                  path: '/category',
                  component: () => import('pages/category')
                },
                {
                  name: 'cart',
                  path: '/cart',
                  component: () => import('pages/cart')
                },
                {
                  name: 'personal',
                  path: '/personal',
                  component: () => import('pages/personal')
                },
                {
                  name: 'search',
                  path: '/search',
                  component: () => import('pages/search')
                },
                /* 当输入不匹配时的跳转 */
                {
                  path: '*',
                  redirect: '/home'
                }
]
;

export default new Router({
  routes
});
