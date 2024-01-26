"use client";

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavPokemons } from "./pokemons/pokemons";
interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  useEffect(() => {
    const favoritePokemons = JSON.parse(
      localStorage.getItem("favorite-pokemons") || "{}"
    );

    store.dispatch(setFavPokemons(favoritePokemons));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
