import { z } from 'zod'
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../function/create-goal'

export const createGoalRoute: FastifyPluginCallbackZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
      },
    },
    async request => {
      const { title, desiredWeeklyFrequency } = request.body

      await createGoal({
        title,
        desiredWeeklyFrequency,
      })
    }
  )
}
