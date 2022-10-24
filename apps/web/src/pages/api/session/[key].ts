import { apiHandler } from '@websolute/core';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'src/config/session';

function sessionGet(request: NextApiRequest, response: NextApiResponse<string | null>) {
  const { key } = request.query;
  const session: { [key: string]: string | null } = request.session as any;
  if (session[key as string]) {
    response.status(200).json(session[key as string]);
  } else {
    response.status(200).json(null);
  }
}

async function sessionPost(request: NextApiRequest, response: NextApiResponse<null>) {
  const { key } = request.query;
  const body = request.body;
  const session: { [key: string]: string | null } = request.session as any;
  // console.log('body', body);
  session[key as string] = body.value;
  // console.log('session', session);
  await request.session.save();
  response.status(200).json(null);
}

async function sessionDelete(request: NextApiRequest, response: NextApiResponse<null>) {
  const { key } = request.query;
  const session: { [key: string]: string | null } = request.session as any;
  session[key as string] = null;
  await request.session.save();
  response.status(200).json(null);
}

export default apiHandler({
  get: withIronSessionApiRoute(sessionGet, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
  post: withIronSessionApiRoute(sessionPost, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
  delete: withIronSessionApiRoute(sessionDelete, sessionOptions) as (request: NextApiRequest, response: NextApiResponse) => Promise<void>,
});
