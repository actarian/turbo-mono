import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from '../../components/button-group/button-group';

const StyledFooter = styled(ButtonGroup)`
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const ModalFooterComponent: React.FC<React.PropsWithChildren<unknown>> = ({ children, ...props }) => {

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>('auto');

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setHeight(`${ref.current.clientHeight}px`);
  }, [ref]);

  return (
    <>
      <div style={{ height, flexShrink: 0 }} />
      <StyledFooter ref={ref} {...props}>
        {children}
      </StyledFooter>
    </>
  )
}

ModalFooterComponent.displayName = 'ModalFooter';

const ModalFooter = React.memo(ModalFooterComponent);

export default ModalFooter;
