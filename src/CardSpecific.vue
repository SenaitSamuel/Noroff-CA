
<template>

    <div class="container">
     <div class="row">
         <div v-for="card in cards" :key="card.id" class= "card mt-7">
         <div v-if="cardId == card.id ">
            <div class= "d-inline-block p-2  card__Image" ><img class="card-img-top" :src="card.imageUrl" alt="Card image cap"> </div>
         <div class="d-inline-block p-2  card__name" >
         <h2 class="card-title p-1">{{card.name}}</h2> 
         <div class="card__about">
            <b> About:</b> 
              <span>{{card.text}}</span>
         </div>
         <div class="card__rarity">
            <b> Rarity:</b> 
              <span>{{card.rarity}}</span>
         </div>
         <div class="card__color">
            <b> Color:</b> 
             <span>{{card.colors}}</span>
         </div>
         </div>
         
               
         </div>
               
         
            </div>
         </div>
     </div>
 
    
</template>

<script>
import axios from 'axios'

export default {
  name: 'CardSpecific',
  data(){
      return{
          cardId:this.$route.params.id,
          cards:[]
      }
  },
      created: function (){
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
           
              
     }
     
  }
 }
</script>

<style scoped lang="scss" >

    
</style>
