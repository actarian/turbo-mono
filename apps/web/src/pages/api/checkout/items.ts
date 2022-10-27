import { apiHandler } from '@websolute/core';
import { getItems } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  options: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).end();
  },
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    const items = request.body.items;
    const locale: string | undefined = request.query.locale as string;
    const market: string | undefined = request.query.market as string;
    // !!! todo user from session
    const user = undefined;
    const data = await getItems(items, market, locale, user);
    response.status(200).json(data);
  },
});
