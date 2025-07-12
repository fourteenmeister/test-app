import type { MantineTheme } from '@mantine/core'

export const headings: MantineTheme['headings'] = {
  fontWeight: '400',
  fontFamily: 'inherit',

  sizes: {
    h1: {
      fontSize: '36px',
      lineHeight: '1.4',
    },
    h2: {
      fontSize: '32px',
      lineHeight: '1.4',
    },
    h3: {
      fontSize: '28px',
      lineHeight: '1.4',
    },
    h4: {
      fontSize: '24px',
      fontWeight: '400',
      lineHeight: '32px',
    },
    h5: {
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '28px',
    },
    h6: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.4',
    },
  },

  textWrap: 'wrap',
}
