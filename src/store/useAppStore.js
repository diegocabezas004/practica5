import { create } from "zustand";
import { createRecipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice } from "./favoritesSlice";

export const useAppStore = create(devtools((...args) => ({
    ...createRecipeSlice(...args),
    ...createFavoritesSlice(...args)
})));
