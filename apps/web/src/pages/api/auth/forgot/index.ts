import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: (request: NextApiRequest, response: NextApiResponse<null>) => {
    const body = request.body;
    console.log('POST > api/auth/forgot', body.email);
    response.status(200).json(null);
  }
});
