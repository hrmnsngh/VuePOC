import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login'
import VueRouter from 'vue-router'
//import App from './components/AppHome'
import Home from './components/Home'
import SignUp from './components/Signup.vue'
import ShowProduct from './components/ShowProduct'

Vue.config.productionTip = false

var routes =[
  {path: '', component: Home},
  {path: '/login', component: Login},
  {path: '/signup', component: SignUp},
  {path: '/product/:id', component: ShowProduct}
];

var router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
