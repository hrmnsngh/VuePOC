<script>
export default {
   props:['item'] 
}
</script>

<template>
 
    <div class="row>">
     <div class="col-9">
            <img class="cartimage" v-bind:src="item.product.image">
            <label v-highlight>{{item.product.name}}</label>
            <label>{{item.product.price}}</label>
     </div>
     <div class="col-3">
            <button v-highlight class="btn btn-danger">Remove</button>
     </div>
    </div>
</template>

<style>
  .cartimage {
      height: 50px;
      width: 50px;
  }
</style>


