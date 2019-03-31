<template>
    <div class = "[container mx-auto]">
        <div class = "[ row ]">
             <div class = "[col-sm-6]">
                <div>
                    <h3>{{ message}} </h3>
                </div>
                <form>
                    
                     <input type="text" placeholder = "Username"  v-model="username" v-bind:class="{ 'error-border': inputUsernameError }" class=" [form-control ]" /><br>
                     <div v-if="showUsernameError"> <span class="[error]">Please enter a correct username</span></div>
                    
                     <input type="password" placeholder = "Password" v-model="password" v-bind:class="{ 'error-border': inputPasswordError }" class=" [form-control ]" /><br>
                     <div class="[alert alert-danger]" v-if="showPasswordError"> Please enter a correct Password</div><br>
                     <button type= " button" v-on:click="login" class="[btn btn-primary btn-lg]">Submit</button>
                </form> 
            </div>
         </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: ['message', 'showUsernameError', 'inputUsernameError','showPasswordError','inputPasswordError'],
 
  methods: {
    login: function(){
        const app = this;
        app.$emit('clicked', this.username, this.password)
    }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
       .container-login{
          background-color: #fefefe;
          margin-top: 50% ; 
          margin-left:35%;
          border: 1px solid #888;
          width: 80%; 
       }
       input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        }
       .error{
           color:red;
           border: 1px solid red;
       }
       
       
     
    
</style>