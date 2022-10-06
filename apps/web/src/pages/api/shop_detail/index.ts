import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';
import { getShopDetails } from 'src/models';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const data = await getShopDetails(request.query);
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
  },
});
