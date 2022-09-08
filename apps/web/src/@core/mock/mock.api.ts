import { fsRead, fsReadJson, pathJoin } from '@core/fs/fs.service';

export async function resolveMockApi(api: string): Promise<any> {
  const pathname = pathJoin(`${api}.json`);
  return await fsRead(pathname);
}

export async function parseMockApi(api: string): Promise<any> {
  const pathname = pathJoin(`${api}.json`);
  return await fsReadJson(pathname);
}
