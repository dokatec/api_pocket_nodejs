import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../function/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginCallbackZod = async app => {
  app.get('/pending-goals', async () => {
    const { pendingGoals } = await getWeekPendingGoals()
    return { pendingGoals }
  })
}
