import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: async (request: NextApiRequest, response: NextApiResponse<null>) => {
    const body = request.body;
    console.log('POST > api/auth/password', body);
    if (body.oldPassword === '123456') {
      response.status(200).json(null);
    } else {
      response.status(401).json(null);
    }
  }
});
