
import { Flex } from '@ui-components';
import { ComponentCssResponsiveProps, SizeVariant } from '@ui-components/types';
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useState } from 'react';
import RadioColor, { RadioColorProps } from './radio-color';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioColorGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioColorGroup = forwardRef<HTMLDivElement, RadioColorGroupProps>(({
  children,
  className,
  size,
  onChange,
  ...props
}, ref) => {
  const [value, setValue] = useState(props.initialValue || null);

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

  return (
    <Flex flexWrap="wrap" gap="1rem" ref={ref} className={className} {...props}>
      {mappedChildren}
    </Flex>
  );
});

RadioColorGroup.displayName = 'RadioColorGroup';

export default RadioColorGroup;
