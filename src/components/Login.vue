<template>
    <div class="container">
        <div class="row">
        <input class="form-control" type="email" v-model="user.email" name="email" id="email" placeholder="email">
        <input class="form-control" type="password" v-model="user.password" name="password" id="password" placeholder="password">
        </div>
        <div class="row">
        <button v-on:click="Login()" class="btn btn-primary">Login</button>
        <GoogleLogin  class="btn btn-primary"></GoogleLogin>
        </div>
    <div class="row">
        <button class="btn btn-primary">Sign-Up</button>
    </div>

    </div>
</template>

<script>
import GoogleLogin from './GoogleLogin'
import axios from 'axios'

export default {
    beforeCreate: function(){
        if(sessionStorage.email){
            this.$router.push('');
        }
    },

    data: function(){
        return{
            user: {
            email:'' ,
            password: ''
            },
            authToken: ''

        }
    },
    methods: {
        Login: function(){
            axios({method: 'post', url:'https://apibyashu.herokuapp.com/api/login', data: this.user})
            .then(
                (response)=>{
                    console.log('resp', response.data);
                    this.authToken = response.data.token;
                    console.log('authToken',this.user.authToken);

                },
                (error) =>{
                    console.log('error',JSON.stringify(error));
                }
            );
        }
    },
    components: {
        GoogleLogin
    }
}
</script>

<style lang="css" scoped>
*{
    margin:10px;
}
</style>