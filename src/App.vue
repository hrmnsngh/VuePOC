<template>
<div>
  <Navbar></Navbar>
  <Signup></Signup>
  <Login></Login>
  <div class="row">
  <Product v-for="(p,index) in  products" v-bind:key="index" v-bind:product="p"></Product>
  </div>
  
</div>
</template>

<script>
import Product from "./components/Product.vue"
import Navbar from "./components/Navbar.vue"
import Signup from "./components/Signup.vue"
import Login from "./components/Login.vue"


import axios from "axios"

export default {
  data:function(){
    return{
      products:[],
      product:{name:'Product 1' , price:4234 , image:'data:image/jpeg;base64,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'}
    }
  },
  created:function(){
     axios({
       method:'get',
       url:'https://apibyashu.herokuapp.com/api/allproducts'
     }).then((response)=>{
       console.log("response received", response)
       this.products = response.data.data
     },(error)=>{
       console.log("error in all products api", error)
     })
  },
  name: 'App',
  components: {
    Navbar,
    Product,
    Signup,
    Login
  }
}
</script>

<style>

</style>
