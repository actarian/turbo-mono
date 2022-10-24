import { apiHandler } from '@websolute/core';
import { getInfo } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const locale: string | undefined = request.query.locale as string;
    const market: string | undefined = request.query.market as string;
    const data = await getInfo(market, locale);
    response.status(200).json(data);
  },
});
