import { createFileRoute } from '@tanstack/react-router'

import { MiningPools } from '@/pages/mining-pools'

export const Route = createFileRoute(
  '/_layout/mining-pools/_miningPoolsLayout',
)({
  component: MiningPools,
  loader: async ({ context: { trpc, queryClient } }) => {
    return queryClient.ensureQueryData(trpc.miningPools.queryOptions())
  },
})
