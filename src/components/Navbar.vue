<script>
export default {
  computed:{
    isloggedin(){
      return this.$store.state.isloggedin
      }
  },
  methods:{
    logout:function(){
      localStorage.clear()
      this.$store.commit('logout')
    }
  },
  data:function(){
    return {
     
    }
  }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <router-link to="/"><a  class="navbar-brand" >My App</a></router-link> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
     
    </ul>
    <div v-if="!isloggedin"  class="form-inline my-2 my-lg-0">
      <router-link to="/login"><button class="btn btn-warning my-2 my-sm-0">Login</button></router-link>
      <router-link to="/signup"><button class="btn btn-danger my-2 my-sm-0">Singup</button></router-link>        
    </div>
     <div v-if="isloggedin"  class="form-inline my-2 my-lg-0">
      <router-link to="/"><button v-on:click="logout()" class="btn btn-warning my-2 my-sm-0">Logout</button></router-link>
      <router-link to="/cart"><button class="btn btn-danger my-2 my-sm-0">Cart</button></router-link>        
    </div>
  </div>
</nav>
</template>
