import { sessionOptions } from '@config/session';
import { IUser } from '@models';
import { apiHandler } from '@websolute/core';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

async function loginPost(request: NextApiRequest, response: NextApiResponse<IUser>) {
  const body = request.body;
  const user = body;
  console.log('user', user);
  request.session.user = user
  await request.session.save();
  response.status(200).json(user);
}

export default apiHandler({
  /*
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json('login');
  },
  */
  post: withIronSessionApiRoute(loginPost, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
});
