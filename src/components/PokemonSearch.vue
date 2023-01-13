<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Search for Pokemon...">
    <button @click="searchPokemon">Search</button>
    <ul v-if="searchResults.length > 0">
      <li v-for="pokemon in searchResults" :key="pokemon.name">{{ pokemon.name }}</li>
    </ul>
    <p v-else-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>


<script>
import { ref } from 'vue';

export default {
  setup() {
    const searchTerm = ref('');
    const searchResults = ref([]);
    const errorMessage = ref('');

    async function searchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.value.toLowerCase()}`);
        const data = await response.json();
        searchResults.value = [{ name: data.name }];
      } catch (error) {
        errorMessage.value = 'Pokemon not found';
      }
    }

    return {
      searchTerm,
      searchResults,
      errorMessage,
      searchPokemon
    }
  }
}
</script>
