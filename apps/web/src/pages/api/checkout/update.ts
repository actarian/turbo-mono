import { apiHandler } from '@websolute/core';
import { ICheckoutPartial, updateCheckout } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  options: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).end();
  },
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    const locale: string | undefined = request.query.locale as string;
    const market: string | undefined = request.query.market as string;
    const action: string = request.body.action;
    const checkout: ICheckoutPartial = request.body.checkout;
    const updatedCheckout = await updateCheckout(checkout, action, market, locale);
    response.status(200).json(updatedCheckout);
  },
});
