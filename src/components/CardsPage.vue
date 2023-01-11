<script setup>
import axios from 'axios'
import { ref } from 'vue';
// import { RouterLink } from 'vue-router';


const pokemons = ref ({})

const getData = async () => {
    try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
 
pokemons.value = data
} catch(error) {
    console.log('error');
}
}
getData()
</script>

<template>

 <ul>
    <li v-for="pokemon in pokemons"  
          :key="pokemon.id"
          :pokemon="pokemon"
        >
          {{ pokemon.name , pokemon.id, }}
        </li>

 </ul>
   
  
</template>

<style scoped lang="scss">

</style>
