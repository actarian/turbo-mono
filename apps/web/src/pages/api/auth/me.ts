import { apiHandler } from '@websolute/core';
import { IUser } from '@websolute/models';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'src/config/session';

function meGet(request: NextApiRequest, response: NextApiResponse<IUser | null>) {
  if (request.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    response.status(200).json(request.session.user);
  } else {
    response.status(200).json(null);
  }
}

export default apiHandler({
  get: withIronSessionApiRoute(meGet, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
});
