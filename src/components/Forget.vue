<template>
    <div class="container-fluid">
        <div class="row">
            <input class="form-group" type="email" v-model="email" placeholder="email">
            <button v-on:click="getEmail()"></button>
        </div>
        
    </div>
</template>

<script>
export default {
    data: function(){
            return{
                    email:''
            }
    },
    methods: {
        getEmail: function(){
            console.log('retrive pass');
        }
    }
}
</script>