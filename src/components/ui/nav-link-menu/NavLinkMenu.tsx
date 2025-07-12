import { Flex } from '@mantine/core'
import { Fragment } from 'react'

import { NavLink } from '@/components/ui/nav-link'
import type { MenuNavLinkItem } from '@/types/global.types'

import { NavLinkMenuOrientation } from './types'

interface NavLinkMenuProps {
  items: MenuNavLinkItem[]
  orientation?: NavLinkMenuOrientation
}

export const NavLinkMenu: React.FC<NavLinkMenuProps> = ({
  items, orientation = NavLinkMenuOrientation.HORIZONTAL,
}) => {
  const Wrapper = orientation === NavLinkMenuOrientation.HORIZONTAL ? Flex : Fragment

  return (
    <Wrapper>
      {items.map(menuItem => (
        <NavLink key={menuItem.href} label={menuItem.label} to={menuItem.href} />
      ))}
    </Wrapper>
  )
}
