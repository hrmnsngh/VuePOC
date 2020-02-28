import Vue from 'vue'
import App from './components/App1.vue'
import Login from "./components/Login.vue"
import Home from "./components/Home.vue"
import Forgot from "./components/Forgot.vue"
import Cart from "./components/Cart.vue"

import Vuex from "vuex"
import VueRouter from "vue-router"
import Signup from "./components/Signup.vue"
import Showproduct from "./components/Showproduct.vue"
import './directives/highlight.directive'


Vue.use(Vuex)

var Aggarwalstore = new Vuex.Store({
    state: {
        isloggedin: localStorage.email,
        cartitems: undefined,
        iscartempty: true
    },
    mutations: {
        login(state) {
            state.isloggedin = true
        },
        logout(state) {
            state.isloggedin = false
        },
        initcart(state, payload) {
            state.cartitems = payload
            state.iscartempty = false
        },
        addtocart(state, item) {
            state.cartitems.push(item)
        }
    }
})

Vue.config.productionTip = false
var routes = [
    { path: '', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/forgot', component: Forgot },
    { path: '/cart', component: Cart },

    { path: '/product/:id', component: Showproduct }


]
var router = new VueRouter({
    routes: routes,
    mode: 'history'
})

Vue.use(VueRouter)


new Vue({
    render: h => h(App),
    router,
    store: Aggarwalstore
}).$mount('#app')