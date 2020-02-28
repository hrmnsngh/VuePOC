<script>
import axios from "axios"
export default {
beforeCreate:function(){
        console.log("before login state" , this.$store.state)
  
if(localStorage.email){
  this.$router.push('/')
}
},
data:function(){
    return {
       email:null,
       password:null
    }
},
methods:{
     login:function(){
         var user = {
             email:this.email,
             password:this.password
         }
        console.log("login clicked", user)
        axios({
            method:'post',
            url:'https://apibyashu.herokuapp.com/api/login',
            data:user
        }).then((response)=>{
            console.log("response from login api", response)
            if(response.data.token){
              localStorage.email = response.data.email
              localStorage.name = response.data.name
              this.$store.commit('login')      
              console.log("......" , this.$store.state)        
              this.$router.push('/')
            }
        },(error)=>{
        console.log("error from login api", error)
        })

     }
}
}

</script>
<template>
 <div>
  <input class="form-control" v-model="email" placeholder="Email">
  <input class="form-control" v-model="password" placeholder="Password" type="password"> 
  <button class="btn btn-primary" v-on:click="login()">Login</button> 
  <router-link to="/forgot">Forgot Your Password ? Click Here</router-link>
  </div>
</template>

<style>
</style>