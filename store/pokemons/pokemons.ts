import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface PokeFavState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokeFavState => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem("favorite-pokemons") || "{}"
  );
  return favoritePokemons;
};

const initialState: PokeFavState = {
  ...getInitialState(),
};

const pokemonsSlice: Slice<PokeFavState> = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }

      // TODO: DO NOT DO THIS
      localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
