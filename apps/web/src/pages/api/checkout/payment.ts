import { apiHandler } from '@websolute/core';
import { getPayment } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    const checkout = request.body;
    const locale: string | undefined = request.query.locale as string;
    const market: string | undefined = request.query.market as string;
    const data = await getPayment(checkout, market, locale);
    response.status(200).json(data);
  },
});
