import { sessionOptions } from '@config/session';
import { apiHandler } from '@websolute/core';
import { IUser } from '@websolute/models';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

async function loginPost(request: NextApiRequest, response: NextApiResponse<IUser | null>) {
  const body = request.body;
  let user = undefined;
  if (body.email === 'jhon.appleseed@gmail.com' && body.password === '123456') {
    user = {
      id: 1,
      schema: 'user',
      firstName: 'Jhon',
      lastName: 'Appleseed',
      email: body.email,
    };
  }
  console.log('loginPost.user', user);
  request.session.user = user
  await request.session.save();
  if (user) {
    response.status(200).json(user);
  } else {
    response.status(401).json(null);
  }
}

export default apiHandler({
  /*
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json('login');
  },
  */
  post: withIronSessionApiRoute(loginPost, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
});
