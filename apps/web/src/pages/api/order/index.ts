import { apiHandler } from '@websolute/core';
import { getOrders } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  options: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).end();
  },
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const { query: { market, locale } } = request;
    const data = await getOrders(market as string, locale as string);
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
  },
});
