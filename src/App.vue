<template>
  <div id="app">
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-card" :class=" { 'navbarOpen': show }">
  <a class="navbar-brand" href="#">Cards</a>
  <button class="navbar-toggler " type="button " data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" @click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarMenu" :class="{ 'show': show }">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active p-2">
        <router-link to="/home" class="navbar-brand">Home</router-link>
      </li>
      <li class="nav-item p-2">
         <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item p-2">
        <router-link class="nav-link" to="/contact">Contact</router-link>
       </li>
    </ul>
  </div>
</nav>
      
   
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    <!-- Footer -->
<footer class="page-footer mt-5">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->   
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      show: true
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.navbar-card {
  min-height: 70px;
  padding-top: 20px;
  background-image:url(./assets/concrete_wall.png);
  background-repeat: repeat;
  color:white;  
}

.navbar-expand-lg .navbar-nav .navbar-brand .nav-link {
  color: #fff;
}
 


 
 

</style>
