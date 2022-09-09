import { getProduct } from '@models';
import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const { query: { id } } = request;
    const data = await getProduct(id as string, request.query);
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
  },
});
