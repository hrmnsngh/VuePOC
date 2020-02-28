<script>
import Navbar from "./Navbar.vue"
import axios from "axios"

export default {
    methods:{
        getcart:function(){
            axios({
               method:'post',
               url:'https://apibyashu.herokuapp.com/api/cart',
               data:{email:localStorage.email}
           }).then((response)=>{
               console.log("response from get cart api", response)
               this.$store.commit('initcart', response.data.data)
               console.log("value of store" , this.$store.state)
           },(error)=>{
               console.log("error from get cart api", error)
           })
        }
        },
    created:function(){
        if(this.$store.state.isloggedin && this.$store.state.cartitems==undefined ){
        this.getcart()
        }
        else{
            this.$store.subscribe(()=>{
        if(this.$store.state.isloggedin && this.$store.state.cartitems==undefined){
        this.getcart()
        }
        })

        }
    },
       
  components:{
      Navbar
  }  
}
</script>

<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<style>

</style>


