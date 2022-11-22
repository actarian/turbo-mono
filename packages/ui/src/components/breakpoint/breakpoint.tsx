import { useBreakpoint, useIdle } from '@websolute/hooks';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

interface Props extends HTMLMotionProps<'div'> {
}

export type BreakpointProps = UIStyledComponentProps<Props>;

const StyledBreakpoint = styled(motion.div) <BreakpointProps>`
  position: fixed;
  top: 6px;
  left: 6px;
  padding: 0.3em 0.8em;
  background: var(--color-warning-500);
  color: var(--color-warning-900);
  border: 1px solid var(--color-warning-700);
  border-radius: 0.3em;
  z-index: 10000;
  font-family: monospace;
  font-size: 0.8rem;
  line-height: 1;
  pointer-events: none;
  ${props => getCssResponsive(props)}
` as typeof Breakpoint;

export const Breakpoint = ((props: BreakpointProps) => {
  const breakpoint = useBreakpoint();
  const isIdle = useIdle(3000);
  return breakpoint.max > 0 ? (
    <AnimatePresence>
      {!isIdle && (
        <StyledBreakpoint
          key="breakpoint"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          {...props}>
          {breakpoint.key} ({breakpoint.min}/{breakpoint.max < 50000 ? breakpoint.max : '∞'})
        </StyledBreakpoint>
      )}
    </AnimatePresence>
  ) : null;
});
