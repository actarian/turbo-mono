
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useEffect, useState } from 'react';
import { Flex } from '../../components';
import type { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import RadioCard, { RadioCardProps } from './radio-card';

interface Props extends ComponentPropsWithRef<'input'> {
  initialValue?: string;
  children?: ReactNode;
}

export type RadioCardGroupProps = UIStyledComponentProps<Props, 'input'>;

export type RadioCardGroupComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

const RadioCardGroup: RadioCardGroupComponent = forwardRef(({
  children,
  className,
  initialValue,
  onChange,
  ...props
}, ref) => {
  const [value, setValue] = useState(initialValue || null);

  useEffect(() => {
    setValue(initialValue || null);
  }, [initialValue])

  const onChange_ = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
    if (event.defaultPrevented) {
      return;
    }
  };

  const mappedChildren = React.Children.map(children || [], (child) => {
    if (!React.isValidElement<RadioCardProps>(child)) {
      return child;
    }
    const item: ReactElement<RadioCardProps> = child;
    if (item.type === RadioCard) {
      return React.cloneElement(item, {
        ...child.props,
        checked: child.props.value === value,
        onChange: onChange_,
      });
    }
    return child;
  });

  // !!! ref to group

  return (
    <Flex.Col gap="2rem" ref={ref} className={className} {...props}>
      {mappedChildren}
    </Flex.Col>
  );
});

RadioCardGroup.displayName = 'RadioCardGroup';

export default RadioCardGroup;
