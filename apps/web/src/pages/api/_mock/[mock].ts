import { apiHandler, parseMockApi } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const { query: { mock } } = request;
    const data = await parseMockApi(mock as string); // use resolveMockApi(mock as string) and set header as content-type: application/json
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
  },
});
