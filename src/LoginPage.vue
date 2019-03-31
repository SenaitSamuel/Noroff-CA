<template>
          <LoginComponent v-bind:showUsernameError = "showUsernameError"
                          v-bind:showPasswordError = "showPasswordError"
                          v-bind:inputUsernameError = "inputUsernameError"
                          v-bind:inputPasswordError = "inputPasswordError"
                          v-bind:message= "message"
                          @clicked= "onClickChild"
            />
          
</template>

<script>
import LoginComponent from './components/LoginComponent.vue'
(function () {
  localStorage.setItem('username', 'Senait');
  localStorage.setItem('password', '1234');
})();

export default {
  name: 'LoginPage',
  components: {
   LoginComponent
  },
  data() {
      return{
          message: 'Please enter a username and password',
          showUsernameError: false,
          showPasswordError: false,
          inputUsernameError: false,
          inputPasswordError: false
      }  
  },
   methods: {
       onClickChild(username, password){
           if(username !==localStorage.getItem("username")|| password !== localStorage.getItem("password")){
               if(username !==localStorage.getItem("username")){
                   this.message = 'Please enter correct login details';
                   this.showUsernameError = true;
                   this.inputUsernameError = true;
               }
               else{
                   this.showUsernameError = false;
                   this.inputUsernameError = false;
               }
               if(password !==localStorage.getItem("password")){
                   this.message = 'Please enter correct login details';
                   this.showPasswordError = true;
                   this.inputPasswordError = true;
               }
               else{
                   this.showPasswordError = false;
                   this.inputPasswordError = false;
               }
           }
           else{
                const sessionID = '21312313213';
                sessionStorage.setItem('sessionID', sessionID);
                this.$router.push({name: 'HomePage'});

                
           }
       }
        
    }
}
</script>

<style scoped lang="scss">


</style>
