import { apiHandler } from '@websolute/core';
import { getDeliveries } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  options: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).end();
  },
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    const checkout = request.body;
    const locale: string | undefined = request.query.locale as string;
    const market: string | undefined = request.query.market as string;
    const deliveries = await getDeliveries(checkout, market, locale);
    response.status(200).json({ deliveries });
  },
});
