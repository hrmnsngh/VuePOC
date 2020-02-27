<template>
  <ul class="nav">
  <li class="nav-item">
    <router-link to="">Home</router-link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact Us</a>
  </li>

    <li class="nav-item">
    <router-link to="/login">Login</router-link>
  </li>
    <li class="nav-item">
      <router-link to="/signup">Sign-Up</router-link>
    
  </li>

</ul>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
ul{
  background: rgb(172, 152, 152);
}
</style>