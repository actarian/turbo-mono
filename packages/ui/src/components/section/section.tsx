import Background from '@ui-components/background/background';
import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getAspectResponsive, getCssResponsive, hasChildOfType } from '@ui-components/utils';
import styled, { css } from 'styled-components';

type Props = {
};

export type SectionProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

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

const Section = (props: SectionProps) => {
  return (
    <SectionContainer {...props}>
      {props.children}
    </SectionContainer>
  );
}

(Section as ISection).Background = Background;

export default Section as ISection;

type ISection = typeof Section & {
  Background: typeof Background;
};

function hasBackground(props: SectionProps): boolean {
  return hasChildOfType(props.children, Background);
}
