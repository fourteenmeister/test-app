import { createFileRoute } from '@tanstack/react-router'

import { About } from '@/pages/about'

export const Route = createFileRoute('/_layout/about')({
  component: About,
})
