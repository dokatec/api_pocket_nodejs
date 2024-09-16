import { z } from 'zod'
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../function/create-gols-completion'

export const createCompletionRoute: FastifyPluginCallbackZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      await createGoalCompletion({
        goalId,
      })
    }
  )
}
