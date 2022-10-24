import { apiHandler } from '@websolute/core';
import { getStores } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    const checkout = request.body;
    const locale: string | undefined = request.query.locale as string;
    const market: string | undefined = request.query.market as string;
    const stores = await getStores(checkout, market, locale);
    response.status(200).json({ stores });
  },
});
