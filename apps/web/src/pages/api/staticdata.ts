import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  // Find the absolute path of the json directory
  const folder = path.join(process.cwd(), 'json');
  // Read the json data file data.json
  const data = await fs.readFile(folder + '/data.json', 'utf8');
  // Return the content of the data file in json format
  console.log('staticdata', data);
  response.status(200).json(JSON.parse(data));
}
