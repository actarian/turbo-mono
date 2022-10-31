import { apiHandler } from '@websolute/core';
import { getItems, ICheckoutItem } from '@websolute/models';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'src/config/session';

async function checkoutItemsOption(request: NextApiRequest, response: NextApiResponse) {
  response.status(200).end();
}

async function checkoutItemsPost(request: NextApiRequest, response: NextApiResponse<ICheckoutItem[]>) {
  const items = request.body.items;
  const locale: string | undefined = request.query.locale as string;
  const market: string | undefined = request.query.market as string;
  // !!! todo user from session
  const user = undefined;
  const data = await getItems(items, market, locale, user);
  response.status(200).json(data);
}

export default apiHandler({
  options: withIronSessionApiRoute(checkoutItemsOption, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
  post: withIronSessionApiRoute(checkoutItemsPost, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
});
