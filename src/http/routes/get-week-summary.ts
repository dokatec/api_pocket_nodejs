import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { getWeekSummary } from '../../function/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginCallbackZod = async app => {
  app.get('/summary', async () => {
    const { summary } = await getWeekSummary()
    return { summary }
  })
}
