import { apiHandler } from '@websolute/core';
import { IUser } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse<IUser | null>) => {
    response.status(200).json(null);
  }
});
