<script>
import Product from "./Product.vue"
import axios from "axios"

export default {
    data:function(){
        return{
            products:[]
        }
    },
    created:function(){
        console.log("this router" , this.$router)
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
  components:{
      Product
  }
    
}
</script>
<template>
<div class="row">
    <Product v-bind:$router="$router" class="col-md-3" v-for="(p,index) in products" v-bind:product="p" v-bind:key="index"></Product>

</div>
    
</template>
<style>

</style>


