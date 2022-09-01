
import { Flex } from '@ui-components';
import { ComponentCssResponsiveProps, SizeVariant } from '@ui-components/types';
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useState } from 'react';
import Radio, { RadioProps } from './radio';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({
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
    if (!React.isValidElement<RadioProps>(child)) {
      return child;
    }
    const item: ReactElement<RadioProps> = child;
    if (item.type === Radio) {
      return React.cloneElement(item, {
        ...item.props,
        size: item.props.size || size,
        checked: item.props.value === value,
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

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
