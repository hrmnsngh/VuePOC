<template>
    <div class="container-fluid">
    <Product class="col-sm-3" v-bind:router="$router" v-for="(p,index) in products" v-bind:key="index" v-bind:product="p"></Product>
    </div>
</template>

<script>
import Product from './Product'
import axios from 'axios'
export default {
    data: function(){
        return{
            products:[]
        }
    },
    components:{
        Product
    },
    created: function(){
    axios({
      method: 'get',
      url: 'https://apibyashu.herokuapp.com/api/allproducts'
    })
    .then(
      (response)=>{
        //console.log(`resp : ${JSON.stringify(response.data.data)}`);
        this.products = response.data.data;
        //console.log(`product ${JSON.stringify(this.products)}`);
      }
     ,(error)=>{
      console.log(`error ${JSON.stringify(error)}`)
     }
    );
    }
}
</script>

<style lang="css" scoped>

</style>