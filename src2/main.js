import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login'
import VueRouter from 'vue-router'
//import App from './components/AppHome'
import Home from './components/Home'
import SignUp from './components/Signup.vue'
import ShowProduct from './components/ShowProduct'
import Cart from './components/Cart'
import Vuex from 'vuex'

Vue.use(Vuex);
var store = new Vuex.Store({
    state: {
        isLoggedin: localStorage.email
    },
    mutations: {
        login(state) {
            state.isLoggedin = true;
        },
        logout(state) {
            state.isLoggedin = false;
        },
        initcart(state, payload) {
            state.cartitems = payload;
        }
    }
});

Vue.config.productionTip = false

var routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/product/:id', component: ShowProduct },
    { path: '/cart', component: Cart }
];

var router = new VueRouter({
    routes: routes,
    mode: 'history'
});

Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')