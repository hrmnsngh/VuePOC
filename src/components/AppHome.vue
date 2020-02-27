<template>
<div>
    <Header/>
    <router-view style="height:80vh;"></router-view>
    <Footer/>
</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    components: {
        Header,
        Footer
    }
}
</script>