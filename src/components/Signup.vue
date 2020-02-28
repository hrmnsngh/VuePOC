<script>
import axios from "axios"
export default {
data:function(){
    return {
       isvalid:false,
       email:null,
       name:null,
       password:null
    }
},
watch:{
   email:function(){
      if(this.email && this.name && this.password){
          this.isvalid = true
      }
      else{
          this.isvalid = false
      }
   },
   name:function(){
        if(this.email && this.name && this.password){
          this.isvalid = true
      }
      else{
          this.isvalid = false
      }
   },
   password:function(){
         if(this.email && this.name && this.password){
          this.isvalid = true
      }
      else{
          this.isvalid = false
      }
   }
},
methods:{
     signup:function(){
         var user = {
             name:this.name,
             email:this.email,
             password:this.password
         }
        console.log("signup clicked", user)
        axios({
            method:'post',
            url:'https://apibyashu.herokuapp.com/api/register',
            data:user
        }).then((response)=>{
            console.log("response from signup api", response)
        },(error)=>{
        console.log("error from signup api", error)
        })

     }
}
}

</script>
<template>
 <div>
  <input class="form-control" v-model="email" placeholder="Email">
  <input class="form-control" v-model="name" placeholder="Name">
  <input class="form-control" v-model="password" placeholder="Password" type="password"> 
  <button v-bind:disabled="!isvalid" class="btn btn-primary" v-on:click="signup()">Signup</button> 
  </div>
</template>

<style>
</style>