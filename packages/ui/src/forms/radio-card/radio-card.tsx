
import { getClassNames, withSchema } from '@websolute/core';
import React, { ComponentPropsWithRef, forwardRef, ReactNode, SVGProps } from 'react';
import styled from 'styled-components';
import { Flex, Media, Text } from '../../components';
import { CssDefault } from '../../components/button/button.css';
import { FontSize } from '../../components/text/text';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getChildsByType, getCssResponsive } from '../../components/utils';
import { RadioIcon } from '../radio/radio-icon';
import { RadioCardGroup } from './radio-card-group';

type Props = ComponentPropsWithRef<'input'> & {
  children?: ReactNode;
};

export type RadioCardProps = UIStyledComponentProps<Props, 'input'>;

export type RadioCardComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

const RadioCardDisabledSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor" {...props}>
    <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke"></line>
  </svg>
);

const RadioCardDisabled = styled(RadioCardDisabledSvg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  border: 1px solid var(--color-neutral-300);
  color: var(--color-neutral-300);
  border-radius: var(--button-border-radius);

  input:disabled ~ &,
  input.disabled ~ & {
    display: block;
  }
`;

const StyledRadioCardInput = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledRadioCardButton = styled.div<RadioCardProps>`
  ${CssDefault}

  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0.8em;
  border-radius: var(--button-border-radius);
  background: var(--color-neutral-100);
  border: 2px solid var(--color-neutral-200);
  color: var(--color-neutral-700);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: .1s ease-in-out;
  transition-property: outline-color, border-color, color, box-shadow;

  input:not(:disabled):hover ~ & {
    border-color: var(--color-neutral-300);
    color: var(--color-neutral-900);
    box-shadow: 0 20px 20px -5px rgba(0, 0, 0, 0.15);
  }

  input:not(:checked) ~ & {
    .abstract {
      display: none;
    }
  }

  input:focus ~ &,
  input:active ~ & {
    outline-color: var(--color-primary-200);
  }

  input:checked ~ &,
  input.active ~ & {
    outline-color: var(--color-primary-500);
  }

  input:disabled ~ &,
  input.disabled ~ & {
    background: var(--color-neutral-200);
    pointer-events: none;
    opacity: 0.4;
  }

input:checked ~ & {
  .radio-icon {
    color: var(--color-primary-500);
  }
}

input:not(:disabled):hover ~ & {
  .radio-icon {
    outline-color: var(--color-neutral-300);
  }
}

input:focus ~ & {
  .radio-icon {
    outline-color: var(--color-primary-200);
  }
}

  ${props => getCssResponsive(props)}
`;

const StyledRadioIcon = styled.div`
  border-radius: 50%;
  color: var(--color-neutral-300);
  pointer-events: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  margin: 8px 0;
`;

const StyledRadioCard = styled.div<RadioCardProps>`
  flex: 1 1 100%;
  position: relative;
  display: flex;
  min-height: 3.8em;
  line-height: 1;
  ${props => getCssResponsive(props)}
`;

export type TextComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, {
  size?: FontSize;
  gradient?: boolean;
}>;

const RadioCardTitle: TextComponent = forwardRef(({
  as = 'div',
  className,
  ...props
}, ref) => {
  const classNames = getClassNames('title', className);
  return (
    <Text className={classNames} size="7" fontWeight="700" ref={ref} {...props} />
  );
});

RadioCardTitle.displayName = 'RadioCardTitle';

const RadioCardAbstract: TextComponent = forwardRef(({
  as = 'div',
  className,
  ...props
}, ref) => {
  const classNames = getClassNames('abstract', className);
  return (
    <Text className={classNames} ref={ref} {...props} />
  );
});

RadioCardAbstract.displayName = 'RadioCardAbstract';

const RadioCardExtra: TextComponent = forwardRef(({
  as = 'div',
  className,
  ...props
}, ref) => {
  const classNames = getClassNames('extra', className);
  return (
    <Text size="10" whiteSpace="nowrap" className={classNames} ref={ref} {...props} />
  );
});

RadioCardExtra.displayName = 'RadioCardExtra';

const RadioCardMedia = styled(Media)`
  width: 80px;
  height: 40px;
`;

const RadioCardBase: RadioCardComponent = forwardRef(({
  as = 'input',
  children,
  className,
  ...props
}, ref) => {

  const [mediaChildren, withoutMediaChildren] = getChildsByType(children, RadioCardMedia);
  const hasMedia = mediaChildren && React.Children.count(mediaChildren) > 0;

  const [extraChildren, otherChildren] = getChildsByType(withoutMediaChildren, RadioCardExtra);
  const hasExtra = extraChildren && React.Children.count(extraChildren) > 0;

  const classNames = getClassNames('radio-option', className);

  return (
    <StyledRadioCard className={classNames} {...props}>
      <StyledRadioCardInput ref={ref} as={as} type="radio" {...props} />
      <StyledRadioCardButton as="button">
        <Flex.Row gap="1rem" alignItems="flex-start" width="100%">
          <Flex.Col className="radio-option__icon" flexBasis="24px">
            <StyledRadioIcon as={RadioIcon} className="radio-icon" aria-hidden="true" />
          </Flex.Col>
          <Flex.Col className="radio-option__description" flexGrow="1">
            {otherChildren}
          </Flex.Col>
          {(hasExtra || hasMedia) &&
            <Flex className="radio-option__extra" flexBasis="50px">
              {mediaChildren}
              {extraChildren}
            </Flex>
          }
        </Flex.Row>
      </StyledRadioCardButton>
      <RadioCardDisabled className="line" />
    </StyledRadioCard>
  );
});

RadioCardBase.displayName = 'RadioCard';

export const RadioCard = withSchema(RadioCardBase, {
  Group: RadioCardGroup,
  Title: RadioCardTitle,
  Abstract: RadioCardAbstract,
  Extra: RadioCardExtra,
  Media: RadioCardMedia,
});
