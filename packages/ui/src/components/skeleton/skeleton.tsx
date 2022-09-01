import React, { useRef } from 'react';
import styled from 'styled-components';
import { Loading } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { useClasses } from '../../hooks';

type Props = {
  loading?: boolean;
}

export type SkeletonProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledSkeleton = styled.div<SkeletonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-100);
  ${props => getCssResponsive(props)}
`

const Skeleton: React.FC<SkeletonProps> = ({ loading, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const classNames = useClasses('skeleton');

  return (
    <StyledSkeleton ref={ref} className={classNames} {...props}>
      {loading && <Loading></Loading>}
    </StyledSkeleton>
  )
}

export default Skeleton;
