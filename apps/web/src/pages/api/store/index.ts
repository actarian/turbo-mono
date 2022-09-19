import { StoreStrategy, storeStrategy } from '@websolute/store';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  // !!! hack for vercel lambdas
  if (storeStrategy === StoreStrategy.Mock) {
    const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
    const data = await fs.readFile(pathname, 'utf8');
    response.status(200).json(JSON.parse(data));
  } else {
    response.status(200).json(null);
  }
}
