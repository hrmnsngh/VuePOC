<template>
<div>
<input type="text" name="name" placeholder="username" v-model="user.name">
<input type="email" name="email" id="email" v-model="user.email">
<input type="text" name="password" placeholder="password" v-model="user.password">
<button v-on:click="signUp()">SignUp</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: function(){
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signUp: function(){
           // let userData;
           /* 
            userData.name =this.user.name;
            userData.email = this.user.email;
            userData.password = this.user.password; */
           // console.log(user);
            axios({method: 'post', url : 'https://apibyashu.herokuapp.com/api/register', data: this.user})
            .then(
                (response)=>{
                    console.log('resp', response.data);
                },
                (error) =>{
                    console.log('error'. JSON.stringify(error));
                }           )
            console.log(`${this.username}, ${this.password}`);
        }
    }
}
</script>