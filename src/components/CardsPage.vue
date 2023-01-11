<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const pokemons = ref({});
    onMounted(async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      const results = await Promise.all(data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        return await res.json();
      }));
      pokemons.value = results
    });
    return { pokemons };
  }
};
</script>

<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.name">
      {{ pokemon.name }}
      <img :src="pokemon.sprites?.front_default" />
    </li>
  </ul>
</template>
