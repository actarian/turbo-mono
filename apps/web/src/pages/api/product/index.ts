import { getProducts } from '@models';
import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const data = await getProducts(request.query);
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
  },
});
