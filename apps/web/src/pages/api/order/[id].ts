import { apiHandler } from '@websolute/core';
import { getOrder } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  options: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).end();
  },
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const { query: { id, market, locale } } = request;
    const data = await getOrder(id as string, market as string, locale as string);
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
  },
});
