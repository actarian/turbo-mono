import { isBrowser } from '../useSSR/useSSR';
import { KeyMod } from './codes';

export function getCtrlKeysByPlatform(): Record<string, 'metaKey' | 'ctrlKey'> {
  return {
    CtrlCmd: isMac() ? 'metaKey' : 'ctrlKey',
    WinCtrl: isMac() ? 'ctrlKey' : 'metaKey',
  }
}

export function getActiveModMap(bindings: number[]): Record<keyof typeof KeyMod, boolean> {
  const modBindings = bindings.filter((item: number) => !!KeyMod[item])
  const activeModMap: Record<keyof typeof KeyMod, boolean> = {
    CtrlCmd: false,
    Shift: false,
    Alt: false,
    WinCtrl: false,
  }
  modBindings.forEach(code => {
    const modKey = KeyMod[code] as keyof typeof KeyMod
    activeModMap[modKey] = true
  })
  return activeModMap
}

export function isMac(): boolean {
  if (!isBrowser()) {
    return false;
  }
  return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
}
