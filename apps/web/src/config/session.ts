// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { httpDelete, httpGet, httpPost } from '@websolute/core';
import { IUser } from '@websolute/models';
import { IronSessionOptions } from 'iron-session';
import { StateStorage } from 'zustand/middleware';

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: '@websolute/next.js',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

// This is where we specify the typings of req.session.*
declare module 'iron-session/next' {
  interface IronSessionData {
    user?: IUser;
    cart?: any;
    checkout?: any;
  }
}

declare module 'iron-session/dist' {
  interface IronSessionData {
    user?: IUser;
    cart?: any;
    checkout?: any;
  }
}

export const IronSessionStorage: StateStorage = {
  getItem: async (name: string) => {
    const value = await httpGet(`/api/session/${name}`);
    // console.log('IronSessionStorage.getItem', name, value);
    return value;
  },
  setItem: async (name: string, value: string) => {
    // console.log('IronSessionStorage.setItem', name, { cart: value });
    await httpPost(`/api/session/${name}`, { value });
  },
  removeItem: async (name: string) => {
    // console.log('IronSessionStorage.removeItem', name);
    await httpDelete(`/api/session/${name}`);
  },
};

/*
import { withIronSessionSsr } from 'iron-session/next';

type IronSessionCallback<P> = (context: GetServerSidePropsContext) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
type IronSessionHandlerResult<P> = (context: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<P>>;

export function withIronSession<P extends { [key: string]: unknown; } = { [key: string]: unknown; }>(
  callback: IronSessionCallback<P>,
  options: IronSessionOptions,
): IronSessionHandlerResult<P> {
  return withIronSessionSsr(async function (context) {
    // !!! hack for vercel lambdas
    if (storeStrategy === StoreStrategy.Mock) {
      const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
      const data = await fs.readFile(pathname, 'utf8');
    }
    return callback(context);
  }, options);
}
*/
