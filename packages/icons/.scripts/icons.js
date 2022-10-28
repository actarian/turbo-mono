
const fs = require('fs');
const path = require('path');

buildAndWatch('svg');

async function buildAndWatch(directory) {
  // console.log('icons.buildAndWatch');
  await rebuild(directory);
  return;
  fs.watch(directory, { interval: 2000 }, async (eventType, fileName) => { // (current, previous) => {}
    await rebuild(directory, fileName);
  });
}

async function rebuild(directory, fileName = null) {
  if (fileName && !isSvg(fileName)) {
    return;
  }
  console.log('icons.rebuild', fileName);
  await fsClear(path.join(directory, '../.icons'));
  if (fileName === null || fs.existsSync(path.join(directory, fileName))) {
    fs.readdir(directory, async (err, fileNames) => {
      fileNames = fileNames.filter(x => isSvg(x));
      const classNames = fileNames.map(fileName => camelize(fileName.replace('.svg', '')));
      const imports = fileNames.map((fileName, i) => `export * from './${fileName.replace('.svg', '')}';`);
      const icons = fileNames.map((fileName, i) => (`  ${classNames[i]}: lazy(() => import('./${fileName.replace('.svg', '')}').then( module => ({ default: module.${classNames[i]} }) ))`));
      const promises = fileNames.map((fileName, i) => fsWrite(path.join(directory, `../.icons/${fileName.replace('.svg', '.tsx')}`), `
import React from 'react';
import ${classNames[i]}Svg from '../svg/${fileName}';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ${classNames[i]} = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<${classNames[i]}Svg {...props} ref={ref} />);
});

${classNames[i]}.displayName = '${classNames[i]}';
`, 'utf8'));
      await Promise.all(promises);
      // console.log(imports);
      await fsWrite(path.join(directory, '../.icons/icons.ts'), `
import { lazy } from 'react';

// https://github.com/feathericons/react-feather

${imports.join('\n')}

export const Icons = {
${icons.join(',\n')}
}
      `, 'utf8');
    });
  }
}

function isSvg(fileName) {
  return fileName && fileName.indexOf('.svg') !== -1;
}

function camelize(text) {
  return text.replace(/(^[a-z])|-([a-z0-9])/gi, ($0, $1, $2) => $2 ? $2.toUpperCase() : $1.toUpperCase());
}

async function fsWrite(pathname, data, encoding = 'utf8') {
  try {
    await fs.promises.writeFile(pathname, data, encoding);
  } catch (error) {
    console.log('fsWrite', error, pathname);
  }
}

async function fsClear(directory) {
  try {
    const fileNames = await fs.promises.readdir(directory);
    for (const fileName of fileNames) {
      await fs.promises.unlink(path.join(directory, fileName));
    }
  } catch (error) {
    console.log('fsClear', error, directory);
  }
}
