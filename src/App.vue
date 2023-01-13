<script setup>
// import HeaderPage from './components/HeaderPage.vue'
import PokemonSearch from './components/PokemonSearch.vue'
import CardsPage from './components/CardsPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
<!-- <HeaderPage /> -->
<PokemonSearch />
    <CardsPage />
    <FooterPage />
</template>

<style>
  input[type="text"] {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    margin-right: 0.5rem;
    width: 20rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
  button:hover {
    background-color: #3e8e41;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }
</style>