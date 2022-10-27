import { apiHandler } from '@websolute/core';
import { setDiscountCode } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  options: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).end();
  },
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    const locale: string | undefined = request.query.locale as string;
    const market: string | undefined = request.query.market as string;
    const discountCode = request.body.discountCode;
    const checkout = request.body.checkout;
    const updatedCheckout = await setDiscountCode(discountCode, checkout, market, locale);
    response.status(200).json(updatedCheckout);
  },
});
