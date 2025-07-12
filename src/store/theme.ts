import { persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

interface ThemeStoreState { theme: 'light' | 'dark' }

interface ThemeStoreActions {
  toggleTheme: () => void
}

type ThemeStore = ThemeStoreState & ThemeStoreActions

export const themeStore = createStore<ThemeStore>()(
  persist(
    (set, getState) => ({
      theme: 'light',
      toggleTheme: () => set({ theme: getState().theme === 'light' ? 'dark' : 'light' }),
    }),
    { name: 'theme-storage' },
  ),
)
