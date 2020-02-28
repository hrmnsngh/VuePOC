<script>
    import axios from "axios"

export default {
    beforeCreate:function(){
        var id = this.$route.params.id
        axios({
            method:'get',
            url:'https://apibyashu.herokuapp.com/api/product/'+id
        }).then((response)=>{
            console.log("response from get product api", response)
            this.product =response.data.data
        },(error)=>{
           console.log("error from get product api" , error)
        })
    },
    data:function(){
        return {
            product:{}
        }
    },
    methods:{
        addToCart: function(){
            console.log(`product ${JSON.stringify(this.product)} added to cart`);
           // this.$router.push('/cart');
    // let email = localStorage.email;
         //  console.log('email : ', email);
           console.log(`product: ${JSON.stringify(this.product)}`);
            axios({ method: 'post', url: 'https://apibyashu.herokuapp.com/api/addtocart', data:{'email': localStorage.email, 'productid': this.product.productid,
            'product':{'name': this.product.name, 'image': this.product.image, 'price': this.product.price }}})
            .then(
                (response)=>{ 
                    console.log(response.data);
                    if(response.data.message =="Added to cart"){
                        this.$router.push('/cart');
                    }
                }
                ,(error)=>{ console.log(JSON.stringify(error))}
            );
        }
    }
}
</script>
<template>
   <div class="container" style=" padding:20px ">
  
  <div class="row">

      <div class="col-md-6">
          
        <img v-bind:src="product.image" alt="image not avilable" style= "width: 416px; height: 416px" >
        <br>
        <button  class="btn btn-outline-info col-md-5" style="padding: 10px" v-on:click="addToCart()"  >Add to Cart</button>
<button class="btn btn-outline-success col-md-5" style="padding: 10px" >Buy now</button>
      </div>
      <div class="col-md-6">

          <table>
              <tr>
                  <td><h3>{{product.name}}</h3></td>
              </tr>
              <tr>
                  <td><h3>{{product.price}}</h3></td>
              </tr>
              <tr>

                  <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" class="_3Amlen" ></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>

              <tr>
                  <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" ></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>
              <tr>
                  <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" ></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>
              <tr>
                  <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" ></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>
              <tr><td class="row"><span class="col-md-4">Seller</span>
                  <span class="col-md-4"> RetailNet</span>
              </td></tr>
              <tr>
                  <td class="row">
                      <span class="col-md-4">Highlights</span>

                      <td><span class="col-md-4"></span><ul><li>Effective Pixels: 24.2 MP</li>
                          <li><span class="col-md-4">Sensor Type: CMOS</span></li>
                          <li><span class="col-md-4"></span>WiFi Available</li>
                          <li><span class="col-md-4"></span>1080p at 60p + Time-Lapse</li></ul>

                  </td></tr>
          </table>
      </div>
  </div>

</div >
</template>
<style>

</style>


