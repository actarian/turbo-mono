// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IUser } from '@models';
import type { IronSessionOptions } from 'iron-session';

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: '@websolute/next.js',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

// This is where we specify the typings of req.session.*
declare module 'iron-session/next' {
  interface IronSessionData {
    user?: IUser
  }
}

declare module 'iron-session/dist' {
  interface IronSessionData {
    user?: IUser
  }
}
