<script>
import Cartitem from "./Cartitem.vue"
export default {
  computed:{
      items(){
          return this.$store.state.cartitems
      }
  },
  data:function(){
      return {
          
      }
  },
  beforeCreate:function(){
       if(!localStorage.email){
           this.$router.push('/')
       }
  },
  components:{
      Cartitem
  } 
}
</script>

<template>
<div>
    <div>
        Your Cart is Empty
    </div>
    <div>
      <Cartitem v-for="(item,index) in items" v-bind:key="index" v-bind:item="item"></Cartitem>

    </div>
</div>
</template>

<style>

</style>
