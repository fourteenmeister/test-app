import type { MantineThemeComponents } from '@mantine/core'
import {
  ActionIcon,
  Button,
  Group,
  Input,
  TextInput,
} from '@mantine/core'

import { footerHeight, headerHeight, leftSideBarCollapsedWidth } from '@/common/const'

import { styles } from './styles'

export const components: MantineThemeComponents = {
  ActionIcon: ActionIcon.extend({
    classNames: styles.actionIconClasses,
    styles: () => ({
      root: {
        '--ai-size-xl': '50px',
      },
    }),
  }),
  AppShell: {
    classNames: styles.appShellClasses,
    defaultProps: {
      transitionDuration: 0,
    },
    styles: () => ({
      root: {
        '--app-shell-footer-height': `${footerHeight}px`,
        '--app-shell-header-height': `${headerHeight}px`,
        '--app-shell-left-sidebar-collapsed-width': `${leftSideBarCollapsedWidth}px`,
        '--app-shell-border-color': 'var(--mantine-color-gray-1)',
      },
    }),
  },
  Button: Button.extend({
    classNames: styles.buttonClasses,
  }),
  Divider: {
    styles: () => ({
      root: {
        '--divider-color': 'var(--mantine-color-gray-2)',
      },
    }),
  },
  Group: Group.extend({
    classNames: styles.groupClasses,
  }),
  Input: Input.extend({
    classNames: styles.inputClasses,
  }),
  TextInput: TextInput.extend({
    classNames: styles.textInputClasses,
  }),
}
