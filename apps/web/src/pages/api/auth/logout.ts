import { apiHandler } from '@websolute/core';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'src/config/session';

function logoutGet(request: NextApiRequest, response: NextApiResponse) {
  request.session.destroy();
  response.status(200).json(null);
}

export default apiHandler({
  get: withIronSessionApiRoute(logoutGet, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
});
