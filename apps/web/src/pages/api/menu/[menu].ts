import { apiHandler, getMenu } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const { query: { menu } } = request;
    const data = await getMenu(menu as string);
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
  },
});
