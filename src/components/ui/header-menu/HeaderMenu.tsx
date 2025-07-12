import { Group, Tabs, Text } from '@mantine/core'
import { useLocation, useNavigate } from '@tanstack/react-router'

import { menuItems } from '@/common/const'
import type { LinkTo } from '@/types/global.types'

import styles from './HeaderMenu.module.css'

export const HeaderMenu = () => {
  const {
    pathname,
  } = useLocation()
  const navigate = useNavigate()
  const onClick = (to: LinkTo) => async () => {
    await navigate({
      to,
    })
  }

  return (
    <Group ml="xl" gap={0} visibleFrom="sm">
      <Tabs autoContrast className={styles.tabs} value={pathname}>
        <Tabs.List className={styles.tabList}>
          {menuItems.map((item, index) => (
            <Tabs.Tab
              className={styles.tab}
              key={item.href}
              onClick={onClick(item.href)}
              value={item.href || `tab_${index}`}
            >
              {item.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Group>
  )
}
