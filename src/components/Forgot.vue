<script>
import axios from "axios"
export default {
    data:function(){
        return {
            email:null
        }
    },
    methods:{
        sendEmail:function(){
            axios({
                method:'Post',
                data:{email:this.email},
                url:'https://apibyashu.herokuapp.com/api/resetpassword'
            }).then((response)=>{
                 console.log("response from password api ", response)
            },(error)=>{
                console.log("error in forgot api" ,error)
            })
        }
    }
}
</script>
<template>
    <div>
         <input v-model="email" class="form-control" type="text">
    <button v-on:click="sendEmail()" class="btn btn-primary">Submit</button>
    </div>
   
</template>
<style>

</style>


