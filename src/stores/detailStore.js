import { defineStore } from "pinia";

export const usePokemonDetailStore = defineStore({
  id: "favpokemons",
  state: () => ({
    pokemonDetails: [],
  }),
  actions: {
      showPokemons(pokemon) {
        if(this.pokemonDetails.indexOf(pokemon) === -1){
            this.pokemonDetails.push(pokemon)
        }

    },
  },
});