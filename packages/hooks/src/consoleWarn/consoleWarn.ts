const warningStack: { [key: string]: boolean } = {};

export function consoleWarn(message: string, component?: string): void {
  if (typeof console === 'undefined') {
    return;
  }
  const tag = component ? ` [${component}]` : ' ';
  const log = `[DesignSystem]${tag}: ${message}`;
  if (warningStack[log]) {
    return;
  }
  warningStack[log] = true;
  if (process.env.NODE_ENV !== 'production') {
    return console.error(log);
  }
  console.warn(log);
}
