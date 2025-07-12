import { createTheme } from '@mantine/core'

import { colors } from './colors'
import { components } from './components'
import { headings } from './headings'

export const theme = createTheme({
  colors,
  components,
  fontFamily: 'IBM Plex sans, sans-serif',
  fontSizes: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '15px',
    xl: '16px',
  },
  headings,
})
