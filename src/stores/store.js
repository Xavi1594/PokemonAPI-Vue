
import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "pokemons",
  state: () => ({
    pokemons: [],
  }),
  actions: {
    async fetchPokemons() {
      for(let index=1; index<=12; index++){
        await fetch("https://pokeapi.co/api/v2/pokemon/" + index)
          .then((response) => response.json())
          .then((data) => {
            this.pokemons.push(data);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
  }
});
