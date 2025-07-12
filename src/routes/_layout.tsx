import { Icon } from '@iconify/react'
import {
  ActionIcon,
  AppShell,
  Burger,
  Flex,
  Group,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet, createFileRoute, useRouterState } from '@tanstack/react-router'
import { useStore } from 'zustand/react'

import { menuItems } from '@/common/const'
import { HeaderMenu } from '@/components/ui/header-menu'
import { LoadingOverlay } from '@/components/ui/loading-overlay'
import { NavLinkMenu } from '@/components/ui/nav-link-menu'
import { themeStore } from '@/store'

export const Route = createFileRoute('/_layout')({
  component: AppLayout,
})

function AppLayout() {
  const isFetching = useRouterState({ select: s => s.isLoading })
  const [opened, { toggle }] = useDisclosure()
  const { theme, toggleTheme } = useStore(themeStore)
  const icon = theme === 'dark' ? 'line-md:moon-loop' : 'line-md:sunny-loop'

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true,
          mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Group justify="space-between" style={{ flex: 1 }}>
            <HeaderMenu />

            <ActionIcon onClick={toggleTheme} size={42} variant="default">
              <Icon icon={icon} height={32} />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <NavLinkMenu items={menuItems} />
      </AppShell.Navbar>

      <AppShell.Main component={Flex}>
        <Flex flex={1} pos="relative">
          <Outlet />

          <LoadingOverlay visible={isFetching} />
        </Flex>
      </AppShell.Main>
    </AppShell>
  )
}
