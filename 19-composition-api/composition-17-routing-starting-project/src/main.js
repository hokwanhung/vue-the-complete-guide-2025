import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AllProducts from './pages/AllProducts.vue';
import ProductDetails from './pages/ProductDetails.vue';
import AddProduct from './pages/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: AllProducts },
    // REMARK: So that we can bypass this.$route, but get the pid as props.
    { path: '/products/:pid', component: ProductDetails, props: true },
    { path: '/products/add', component: AddProduct }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
