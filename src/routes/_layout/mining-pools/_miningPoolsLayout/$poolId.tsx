import { createFileRoute } from '@tanstack/react-router'

import { MiningPoolDetails } from '@/pages/mining-pools/details'

export const Route = createFileRoute('/_layout/mining-pools/_miningPoolsLayout/$poolId')({
  component: MiningPoolDetails,
  loader: async ({ context: { trpc, queryClient }, params: { poolId } }) => {
    return queryClient.ensureQueryData(trpc.miningPool.queryOptions(poolId))
  },
})
