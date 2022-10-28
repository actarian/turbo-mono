import { withSchema } from '@websolute/core';
import styled, { css } from 'styled-components';
import { Background } from '../../components/background/background';
import { UIStyledComponentProps } from '../../components/types';
import { getAspectResponsive, getCssResponsive, hasChildOfType } from '../../components/utils';

type Props = {
};

export type SectionProps = UIStyledComponentProps<Props>;

const SectionContainer = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => getCssResponsive(props, { padding: '3rem 0' })}
  ${props => getAspectResponsive(props)};

  ${props => hasBackground(props) ? css`
    color: var(--color-neutral-100);
    position: relative;

    &>:not(.background) {
      position: relative;
    }
  `: ''}
`;

/*
${props => props.aspect ? css`
  position: relative;
  width: 100%;
  padding-top: ${100 / props.aspect}%;
  overflow: hidden;

  &>div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
` : ''};
*/

const SectionBase = (props: SectionProps) => {
  return (
    <SectionContainer {...props}>
      {props.children}
    </SectionContainer>
  );
}

export const Section = withSchema(SectionBase, {
  Background: Background,
  displayName: 'Section',
});

function hasBackground(props: SectionProps): boolean {
  return hasChildOfType(props.children, Background);
}
