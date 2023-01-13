<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const pokemons = ref([]);
    onMounted(async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
      const data = await response.json();
      const results = await Promise.all(data.results.slice(0, 150).map(async pokemon => {
        const res = await fetch(pokemon.url);
        return await res.json();
      }));
      pokemons.value = results
    });

    const displayPokemons = computed(() => pokemons.value);

    return { pokemons, displayPokemons };
  }
};
</script>
<template>
  <div class="grid-container">
    <div v-for="pokemon in displayPokemons" :key="pokemon.name" class="card-container">
      <div :class="`card ${pokemon.types.map(type => type.type.name).join(' ')}`">
        <h2 class="card-title" >{{ pokemon.name.toUpperCase() }}</h2>
        <div class="card-info">
          <p>ID: {{ pokemon.id }}</p>
          <p>Tipo: {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
        </div>
        <img :src="pokemon.sprites?.other.home.front_default" class="card-image" />
      </div>
    </div>
  </div>
</template>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    margin-top: 18%;
    margin-bottom: 10%;
    align-content: center;
    justify-items: center;
}
.card-container {
display: flex;
flex-wrap: wrap;
}
.card {
width: 14rem;
height: 17rem;
border: 1px solid black;
padding: 1rem;
box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
font-size: 12px;
border-radius: 10%;
display: grid;
align-items: center;
align-content: center;
}

p {
    font-size: 16px;
  }

.card-title {
text-align: center;
}
.card-title:hover{
letter-spacing: 1px;
text-shadow: 5px black;
}
.card-info {
text-align: center;
font-size: 12px;
  
}
.card-image {
width: 100%;
max-width: 12rem;
max-height: 12rem;
cursor: pointern;
}
.card-image:hover {
rotate: 20deg;

}
.grass {background:rgb(3, 139, 44) !important;}
.poison {background:rgb(74, 7, 105) !important;}
.water {background:rgb(8, 135, 219) !important;}
.dragon {background:rgb(27, 2, 68) !important;}
.ice {background:rgb(78, 199, 255) !important;}
.flying {background:rgb(145, 215, 255) !important;}
.fire {background:rgb(238, 135, 17) !important;}
.ghost {background:rgb(74, 52, 87) !important;}
.fighting {background:rgb(122, 0, 0) !important;}
.normal {background:rgb(104, 104, 104) !important;}
.psychic {background:rgb(195, 0, 255) !important;}
.bug {background:rgb(52, 87, 6) !important;}
.dark {background:rgb(43, 43, 43) !important;}
.steel {background:rgb(116, 116, 116) !important;}
.fairy {background:rgb(248, 165, 237) !important;}
.eletric {background:rgb(255, 217, 1) !important;}
.rock {background:rgb(88, 95, 100) !important;}
.ground {background:rgb(92, 70, 70) !important;}
.card-image {
width: 100%;
max-width: 12rem;
max-height: 12rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
}
</style>