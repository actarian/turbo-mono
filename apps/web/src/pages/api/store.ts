import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  // Find the absolute path of the json directory
  const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
  // Read the json data file data.json
  const data = await fs.readFile(pathname, 'utf8');
  // Return the content of the data file in json format
  response.status(200).json(JSON.parse(data));
}
