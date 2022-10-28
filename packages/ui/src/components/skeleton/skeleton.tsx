import { getClassNames } from '@websolute/core';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Loading } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
  loading?: boolean;
}

export type SkeletonProps = UIStyledComponentProps<Props>;

const StyledSkeleton = styled.div<SkeletonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-100);
  ${props => getCssResponsive(props)}
`

export const Skeleton: React.FC<SkeletonProps> = ({ loading, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const classNames = getClassNames('skeleton');
  return (
    <StyledSkeleton ref={ref} className={classNames} {...props}>
      {loading && <Loading></Loading>}
    </StyledSkeleton>
  )
}
