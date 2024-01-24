import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
"1": {id:1,name:"name"}
"2": {id:1,name:"name2"}
*/

interface PokeFavState {
  [key: string]: SimplePokemon;
}

const initialState = {
  "1": { id: 1, name: "bulbasaur" },
  "2": { id: 2, name: "ivysaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
