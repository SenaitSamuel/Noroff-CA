<template>
    <div class="container">

    <!-- Search form -->
   
     <form class="form-inline form-search mt-5 mb-5">
     <div class="col-12">
     <input class="form-control form-control-md  w-100 " type="search" v-model="searchCard"  placeholder="Search..." aria-label="Search" >
    <button class="btn btn-success btn-md" type="submit">Search</button>  
    </div>
    </form>
    
    
     <div class="row">
         <div v-for="card in filterCards" :key="card.id" class="col-md-4 mt-5 " >
         <div class="card">
                <HomeComponent v-bind:name = "card.name "
                               v-bind:image = "card.imageUrl "
                           > </HomeComponent>
                <button @click="cardSpecific(card.id)" type="button" class="btn btn-primary btn-block">View More</button>
            </div>
            </div>
         </div>
     
     </div>
 
    
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  components: {
    HomeComponent
  },
  data(){
      return{
          cards:[],
          searchCard: ""
      }
  },
  beforeMount: function (){
      const app = this;
      if(!sessionStorage.getItem('sessionID')){
          app.$router.push({name: 'HomePage'})
      }
      this.fetchCards();
  },
      
          
           methods: {
            fetchCards: function (){
                 const url = "https://api.magicthegathering.io/v1/cards";
                  const app = this
                
               axios.get(url)
               .then(function (res){
                   app.cards = res.data.cards
                    
                    
                })
           
              
     },
     cardSpecific(cardId) {
    this.$router.push({name:'CardSpecific',params:{id:cardId}})
  }
  },
   computed:{
               filterCards: function(){
                   return this.cards.filter((card)=> {
                       return card.name.match(this.searchCard)
                   })
                   
               }
           }
 }

</script>

<style scoped lang="scss" >

.card{
    box-shadow: 4px 8px 8px 4px rgba(0,0,0,0.2);
    margin: 20px;
     
     &:hover{
          box-shadow: 0 18px 18px 0 rgba(0,0,0,0.2);
          transition: 0.5s;
    }
}

    
</style>
