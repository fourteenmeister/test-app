import type { NavLinkProps as MantineLinkProps } from '@mantine/core'
import { NavLink as MantineNavLink } from '@mantine/core'
import { Link } from '@tanstack/react-router'

import type { LinkTo } from '@/types/global.types'

interface NavLinkProps extends Omit<MantineLinkProps, 'href'> {
  ref?: React.ForwardedRef<HTMLAnchorElement>
  to: LinkTo
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <MantineNavLink component={Link} noWrap {...props} />
  )
}
