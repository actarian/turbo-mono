import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowSize } from '../useWindowSize/useWindowSize';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Breakpoint {
  key: BreakpointType;
  min: number;
  max: number;
}

export function useBreakpoint(): Breakpoint {
  // todo
  const windowSize = useWindowSize();

  // const [breakpoint, setBreakpoint] = useState<Breakpoint>({ key: 'xs', min: 0, max: 0 });

  const theme = useContext(ThemeContext);
  const breakpoints: BreakpointType[] = Object.keys(theme.mediaQuery) as BreakpointType[];
  const values: number[] = Object.values(theme.mediaQuery);

  const breakpoint = useMemo(() => {
    const breakpoint = values.reduce((p, c, i) => {
      if (c < windowSize.width) {
        p.key = breakpoints[i];
        p.min = c;
        if (i + 1 < values.length) {
          p.max = values[i + 1];
        } else {
          p.max = Number.POSITIVE_INFINITY;
        }
      }
      return p;
    }, { key: 'xs' as BreakpointType, min: -Number.NEGATIVE_INFINITY, max: -Number.NEGATIVE_INFINITY });
    return breakpoint;
  }, [windowSize.width]);

  return breakpoint;
}
