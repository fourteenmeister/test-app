/// <reference types="vite-plugin-svgr/client" />

import type { QueryClient } from '@tanstack/react-query'
import type { LinkProps } from '@tanstack/react-router'

declare module '*.svg?react' {
  import type * as React from 'react'

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const ReactComponentDefault: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponentDefault
}

declare type LinkTo = LinkProps['to']

declare interface MenuNavLinkItem {
  href: LinkTo
  label: React.ReactNode
}

declare interface RouterContext {
  queryClient: QueryClient
}
