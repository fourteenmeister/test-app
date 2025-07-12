import { MantineProvider as MantineCoreProvider } from '@mantine/core'
import { useStore } from 'zustand/react'

import { themeStore } from '@/store'

import { theme } from './theme'

export const MantineProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const colorScheme = useStore(themeStore, state => state.theme)

  return (
    <MantineCoreProvider forceColorScheme={colorScheme} theme={theme}>
      {children}
    </MantineCoreProvider>
  )
}
