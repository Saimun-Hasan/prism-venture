import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductFilterState {
    activeCategory: string | null;
    activeSubcategory: string | null;
    searchQuery: string;

    setCategory: (category: string | null) => void;
    setSubcategory: (subcategory: string | null) => void;
    setSearchQuery: (query: string) => void;
    setFilters: (category: string | null, subcategory: string | null) => void;
    clearFilters: () => void;
}

export const useProductStore = create<ProductFilterState>()(
    persist(
        (set) => ({
            activeCategory: null,
            activeSubcategory: null,
            searchQuery: '',

            setCategory: (category) => set({
                activeCategory: category,
                ...(category ? {} : { activeSubcategory: null })
            }),

            setSubcategory: (subcategory) => set({ activeSubcategory: subcategory }),

            setSearchQuery: (query) => set({ searchQuery: query }),

            setFilters: (category, subcategory) => set({
                activeCategory: category,
                activeSubcategory: subcategory
            }),

            clearFilters: () => set({
                activeCategory: null,
                activeSubcategory: null,
                searchQuery: ''
            })
        }),
        {
            name: 'product-filters',
            partialize: (state) => ({
                activeCategory: state.activeCategory,
                activeSubcategory: state.activeSubcategory,
                searchQuery: state.searchQuery
            })
        }
    )
);