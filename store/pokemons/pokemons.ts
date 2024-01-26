import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface PokeFavState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokeFavState = {
  favorites: {},
};

const pokemonsSlice: Slice<PokeFavState> = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavPokemons: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) => {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { setFavPokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
