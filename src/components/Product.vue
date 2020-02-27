<template>
<div v-on:click="showProduct()">
  <div v-if="product" class="card" style="width: 18rem;">
  <img v-bind:src="product.image" class="card-img-top" alt="img">
  <div class="card-body">         
    <div class="card-text">{{product.name}}</div>
    <div class="card-text">{{product.price}}</div>   
    
  </div>
</div>
</div>


</template>

<script>
export default {
    props: ['product', 'router'],
    data: function(){      
    },
    methods:{
        modify: function(){
            return this.product
        },
        showProduct: function(){
          console.log(this.router);
          this.$router.push('/product/'+this.product.productid);
        }
    }
}
</script>

<style lang="css" scoped>
</style>>
