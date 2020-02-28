<template>
  <ul class="nav">
  <li class="nav-item">
    <router-link to="/">Home</router-link>
  </li>
<!--   <li class="nav-item">
    <a class="nav-link" href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact Us</a>
  </li> -->

    <li class="nav-item pull-right">
    <router-link to="/cart">Cart</router-link>
  </li>

           <li v-if="!isLoggedin" class="nav-item">
    <router-link to="/login">Login</router-link>
</li>
        <li v-if="!isLoggedin" class="nav-item">
      <router-link to="/signup">Sign-Up</router-link>
    </li>
      <li v-if="isLoggedin"  v-on:click="logOut()" class="nav-item ">
    Logout
  </li>


</ul>
</template>

<script>

export default {
  computed:{
   isLoggedin(){return this.$store.state.isLoggedin}    
  },
    data: function(){
      return{
       // isLoggedin: localStorage.email
      }
    },
    methods: {
      logOut: function(){
        localStorage.clear();
        this.$store.commit('logout');
        console.log('localStorge', JSON.stringify(localStorage));
      }
    }
}
</script>

<style lang="css" scoped>
ul{
  background: rgb(172, 152, 152);
}
</style>