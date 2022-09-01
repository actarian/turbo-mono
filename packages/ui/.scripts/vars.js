
const fs = require('fs');
const path = require('path');

buildAndWatch('src/styles/theme.json');

async function buildAndWatch(fileName) {
  // console.log('vars.buildAndWatch');
  await rebuild(fileName);
  fs.watchFile(fileName, { interval: 2000 }, async () => { // (current, previous) => {}
    await rebuild(fileName);
  });
}

async function rebuild(fileName) {
  console.log('vars.rebuild', fileName);
  const theme = await fsReadJson(fileName);
  const nameAndValues = collectNameAndValues(theme);
  const scssVars = getScssVars(nameAndValues);
  const rootVars = getRootVars(nameAndValues);
  // const vars = collectVars(theme);
  await fsWrite('src/styles/_vars.scss', scssVars + '\n' + rootVars);
  const vars = `
  import { css } from 'styled-components';

  export const CssVars = css\`
:root {
${nameAndValues.names.map((key, i) => {
    const value = nameAndValues.values[i];
    return `  --${key}: ${value};`;
  }).join('\n')}
}
\`;
  `;
  await fsWrite('src/styles/_vars.tsx', vars);
}

function getScssVars(nameAndValues) {
  const vars = nameAndValues.names.map((key, i) => {
    const value = nameAndValues.values[i];
    return `$${key}: ${value};`;
  }).join('\n');
  return vars;
}

function getRootVars(nameAndValues) {
  const vars = `
:root {
${nameAndValues.names.map((key, i) => {
    return `  --${key}: #{$${key}};`;
  }).join('\n')}
}
  `;
  return vars;
}

function collectNameAndValues(object, parentKey = '', collection = { names: [], values: [] }) {
  if (object) {
    Object.keys(object).map(key => {
      let value = object[key];
      key = (parentKey.length ? `${parentKey}-` : '') + hypenize(key);
      if (typeof value === 'object') {
        collection = collectNameAndValues(value, key, collection);
      } else {
        collection.names.push(key);
        collection.values.push(value);
      }
    });
  }
  return collection;
}

function collectVars(object, parentKey = '') {
  if (value) {
    return Object.keys(object).map(key => {
      let value = object[key];
      key = (parentKey.length ? `${parentKey}-` : '') + hypenize(key);
      if (typeof value === 'object') {
        value = collectVars(value, key);
        return value;
      } else {
        return `$${key}: ${value};`;
      }
    }).join('\n');
  } else {
    return '';
  }
}

function hypenize(text) {
  return text.replace(/(?<![A-Z])[A-Z]|(?<![0-9]|^)[0-9]/g, m => '-' + m.toLowerCase());
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

async function fsRead(pathname, encoding = 'utf8') {
  try {
    const data = await fs.promises.readFile(pathname, encoding);
    return data || null;
  } catch (error) {
    console.log('fsRead', error, pathname);
    return null;
  }
}

async function fsReadJson(pathname) {
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
