
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useEffect, useState } from 'react';
import { Flex } from '../../components';
import { SizeVariant, UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { RadioColor, RadioColorProps } from './radio-color';

type Props = Omit<ComponentPropsWithRef<'input'>, 'size'> & {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
};

export type RadioColorGroupProps = UIStyledComponentProps<Props, 'input'>;

export type RadioColorGroupComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

export const RadioColorGroup: RadioColorGroupComponent = forwardRef(({
  children,
  className,
  size,
  initialValue,
  onChange,
  ...props
}, ref) => {
  const [value, setValue] = useState(initialValue || null);

  useEffect(() => {
    setValue(initialValue || null);
  }, [initialValue]);

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
    if (!React.isValidElement<RadioColorProps>(child)) {
      return child;
    }
    const item: ReactElement<RadioColorProps> = child;
    if (item.type === RadioColor) {
      return React.cloneElement(item, {
        ...child.props,
        size: child.props.size || size,
        checked: child.props.value === value,
        onChange: onChange_,
      });
    }
    return child;
  });

  // !!! ref to group

  return (
    <Flex flexWrap="wrap" gap="1rem" ref={ref} className={className} {...props}>
      {mappedChildren}
    </Flex>
  );
});

RadioColorGroup.displayName = 'RadioColorGroup';
