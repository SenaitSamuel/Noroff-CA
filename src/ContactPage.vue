<template>
	<div class= "container container-contact">
    <div class="row">
          <div class="col-sm-10 col-sm-offset-2 mt-5">
            <div>
              <h2 class= "">Contact Us</h2>
            </div>
            <form @submit.prevent="Submit" method="post">
              <div class="form-group mb-4">
             <input type="text" class="form-control p-3" v-model=" name" name="name" required placeholder="First Name*" >
              </div>
              <div class="form-group mb-4">
             <input type="text" class="form-control p-3"  v-model="LastName"  name="name" required placeholder="Last Name*" >
              </div>
              <div class="form-group mb-4">
               <input type="email" class="form-control p-3"  v-model="email" name="email" required placeholder="Email*">
              </div>
              <div class="form-group mb-4">
               <input type="tel" class="form-control p-3"  v-model="telephone" name="phone" required  pattern="^\d{4}-\d{3}-\d{4}$" placeholder="Phone number" >
              </div>
              <div>
                <button type="submit" class="btn btn-lg btn-danger">CONTACT US</button>
              </div>
            </form>
          </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ContactComponent',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.container-contact{

}
     
  
</style>
