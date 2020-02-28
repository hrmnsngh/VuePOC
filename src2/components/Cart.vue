<script>
import axios from "axios"
import Cartitem from "./CartItem"
export default {
  data:function(){
      return {
          items:[]
      }
  },
  beforeCreate:function(){
       if(!localStorage.email){
           this.$router.push('/')
       }
       else{
           axios({
               method:'post',
               url:'https://apibyashu.herokuapp.com/api/cart',
               data:{email:localStorage.email}
           }).then((response)=>{
               console.log("response from get cart api", response)
               this.items = response.data.data;
/*                for( let i=0; i<this.items.length; i++){
                   if(i+1 <= this.items.length){
                    if(this.items[i].product.productid == this.items[i+1].product.productid ){
                         ++ this.items[i].product.quantity;
                         this.items.splice(i+1, 1);
                         console.log(JSON.stringify(this.items));
                    }
                   } 
                  
               } */
/*                this.items.forEach(element => {
                   console.log(JSON.stringify(element));
               }); */
           },(error)=>{
               console.log("error from get cart api", error)
           })
       }
  },
  components:{
      Cartitem
  } 
}
</script>

<template>
<div>
    <div v-if="!items" class="alert alert-warning ">
        Your Cart is Empty
    </div>
    <div>
      <Cartitem v-for="(item,index) in items" v-bind:key="index" v-bind:item="item"></Cartitem>

    </div>
</div>
</template>

<style>

</style>
