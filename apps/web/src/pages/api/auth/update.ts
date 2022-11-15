import { apiHandler } from '@websolute/core';
import { IUser } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: async (request: NextApiRequest, response: NextApiResponse<IUser>) => {
    const body = request.body;
    console.log('POST > api/auth/update', body);
    const user = body;
    response.status(200).json(user);
  }
});
