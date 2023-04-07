import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

type favoriteReposState = {
    favoriteReposIds: number[],
    addFavoriteRepo: (id: number) => void,
    removeFavoriteRepo: (id: number) => void
}

export const useRepoStore = create(
    persist<favoriteReposState>(
        (set) => ({
            favoriteReposIds: [],
            addFavoriteRepo: (id) => {
                set((state) => ({
                    favoriteReposIds: [...state.favoriteReposIds, id]
                }))
            },
            removeFavoriteRepo: (id) => {
                set((state) => ({
                    favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id)
                }));
            }
        }),
        {
            name: 'repositories-storage', // name of the item in the storage (must be unique)
        }
    ),

)