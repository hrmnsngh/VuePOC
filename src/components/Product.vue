<script>
export default {
    props:['product' ,'$router'],
    methods:{
        showproduct:function(){
            console.log("................" , this.$router)
            this.$router.push('/product/'+this.product.productid)
        }
    }
    
}
</script>

<template>
    <div v-on:click="showproduct()" class="card" style="width: 18rem;">
  <img v-bind:src="product.image" class="card-img-top productimage" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.price}}</p>
  </div>
</div>
</template>
<style>
.productimage {
    height: 150px;
}
</style>

