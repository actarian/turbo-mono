import { MutableRefObject, useEffect, useState } from 'react';

export type SizeType = {
  width: number;
  height: number;
};

export type SizeResult = [SizeType, () => void];

export function useRealSize<T extends HTMLElement>(ref: MutableRefObject<T | null>): SizeResult {
  const [state, setState] = useState<SizeType>({ width: 0, height: 0 });
  const update = () => {
    const { width, height } = getRealSize(ref.current);
    setState({ width, height });
  };
  useEffect(() => update(), [ref.current]);
  return [state, update];
}

export function getRealSize(element: HTMLElement | null): SizeType {
  const defaultSize: SizeType = { width: 0, height: 0 };
  if (!element || typeof window === 'undefined') {
    return defaultSize;
  }
  const rect = element.getBoundingClientRect();
  const { width, height } = window.getComputedStyle(element);
  return {
    width: getComputedValue(`${width}`, rect.width),
    height: getComputedValue(`${height}`, rect.height),
  };
}

function getComputedValue(style: string, parentNum: number): number {
  if (!style) {
    return 0;
  }
  const value = style.includes('px') ? +style.split('px')[0] : (
    style.includes('%') ? +style.split('%')[0] * parentNum * 0.01 : style
  );
  return Number.isNaN(+value) ? 0 : +value;
}
