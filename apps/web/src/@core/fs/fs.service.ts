/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');

export async function fsExists(pathname: string): Promise<boolean> {
  try {
    await fs.promises.access(pathname);
    return true;
  } catch {
    return false
  }
}

export async function fsRead(pathname: string, encoding = 'utf8'): Promise<any> {
  try {
    const data = await fs.promises.readFile(pathname, encoding);
    return data || null;
  } catch (error) {
    console.log('fsRead', error, pathname);
    return null;
  }
}

export async function fsReadJson(pathname: string): Promise<any> {
  try {
    const data = await fsRead(pathname);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  } catch (error) {
    console.log('fsReadJson', error, pathname);
    // throw (error);
    return null;
  }
}

export async function fsWrite(pathname: string, data: string, encoding = 'utf8'): Promise<void> {
  try {
    await fs.promises.writeFile(pathname, data, encoding);
  } catch (error) {
    console.log('fsWrite', error, pathname);
  }
}

export async function fsWriteJson(pathname: string, data: any): Promise<void> {
  try {
    await fsWrite(pathname, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log('fsWriteJson', error, pathname);
  }
}

export async function fsExistOrCreateFolder(pathname: string): Promise<void> {
  try {
    const exists = fs.existsSync(pathname);
    if (!exists) {
      await fs.promises.mkdir(pathname);
    }
  } catch (error) {
    console.log('fsExistOrCreateFolder', error, pathname);
  }
}

export async function fsReadDirectory(pathname: string, extension?: string): Promise<{ name: string, data: string }[]> {
  const files = await fs.promises.readdir(pathname);
  const items = files.flatMap(async (file: string) => {
    const filePath = path.join(pathname, file);
    const stat = await fs.promises.stat(filePath);
    if (stat.isDirectory()) {
      return;
    }
    if (extension && path.parse(file).ext !== extension) {
      return;
    }
    const data = await fs.promises.readFile(filePath);
    if (!data) {
      return;
    }
    return {
      name: path.parse(file).name,
      data: data.toString(),
    };
  }) as Promise<{ name: string, data: string }>[];
  const items2 = (await Promise.all(items)).filter(Boolean);
  return items2;
}

export async function fsReadJsonDirectory(pathname: string): Promise<{ name: string, data: any }[]> {
  try {
    const datas = await fsReadDirectory(pathname, '.json');
    return datas.filter(Boolean).map(x => {
      x.data = JSON.parse(x.data);
      return x;
    });
  } catch (error) {
    console.log('fsReadJsonDirectory', error, pathname);
    // throw (error);
    return [];
  }
}

export function fsWatch(pathname: string, callback: (eventType: any, fileName: string) => void, options?: { interval: 2000 }): void {
  const debounced = debounce(callback);
  return fs.watch(pathname, options, debounced);
}

export function fsWatchFile(pathname: string, callback: (eventType: any, fileName: string) => void, options?: { interval: 2000 }): void {
  const debounced = debounce(callback);
  return fs.watchFile(pathname, options, debounced);
}

export function pathJoin(...paths: string[]): string {
  return path.join(process.cwd(), ...paths);
}

export function debounce(callback: (...args: any[]) => void, timeout: number = 300) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}
