import { initTRPC } from '@trpc/server'
import { createExpressMiddleware } from '@trpc/server/adapters/express'

import { sleep } from '@/common/utils'

import { MiningPoolDetails, MiningPools } from './mock.data'

const createTRPContext = () => ({})

type TRPCContext = Awaited<ReturnType<typeof createTRPContext>>

const simulateDelay = 400

const t = initTRPC.context<TRPCContext>().create()

export const appRouter = t.router({
  miningPools: t.procedure.query(async () => {
    await sleep(simulateDelay)
    return MiningPools
  }),
  miningPool: t.procedure.input(String).query(async ({ input }) => {
    await sleep(simulateDelay)
    return MiningPoolDetails[input]
  }),
})

export const trpcMiddleWare = createExpressMiddleware({
  router: appRouter,
  createContext: createTRPContext,
})

export type AppRouter = typeof appRouter
