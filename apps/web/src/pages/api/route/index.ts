
import { apiHandler } from '@websolute/core';
import { getRoute, getRoutes } from '@websolute/models';
import { registerCollections } from '@websolute/store';
import { NextApiRequest, NextApiResponse } from 'next';
import { COLLECTIONS } from 'src/config';

registerCollections(COLLECTIONS);

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    // console.log('api/route.get', request.query);
    // console.count('api/route.get');
    const data = await getRoutes();
    if (data) {
      response.status(200).json(data);
    } else {
      response.status(500).send('impossible to read data');
    }
  },
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    // console.log('api/route.post', request.query);
    // console.count('api/route.post');
    const { pathname } = request.body;
    // console.log('route.apiHandler', pathname);
    const data = await getRoute(pathname);
    // console.log('route.apiHandler', pathname, '->', data);
    return response.status(200).json(data);
    /*
    // !!! throwing error not working check
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('Route not found');
    }
    */
  }
});

/*
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    const { href } = request.body;
    const data = await store.getRoutes(href);
    response.status(200).json(data);
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
*/
