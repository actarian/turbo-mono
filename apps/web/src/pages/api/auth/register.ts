import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: async (request: NextApiRequest, response: NextApiResponse<null>) => {
    const body = request.body;
    console.log('POST > api/auth/register', body);
    response.status(200).json(null);
  }
});
