<template>

<div class="card-body">
            <h5 class="card-title p-1">{{name}}</h5>   
         <img class="card-img-top" :src="image" alt="Card image cap"> 
    </div>

       
</template>

<script>
export default {
  name: 'HomeComponent',
  props:['name', 'image' ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
     
    
   
</style>
