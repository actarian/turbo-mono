
import { Grid } from '@ui-components';
import { ComponentCssResponsiveProps, SizeVariant } from '@ui-components/types';
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useState } from 'react';
import RadioOption, { RadioOptionProps } from './radio-option';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioOptionGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioOptionGroup = forwardRef<HTMLDivElement, RadioOptionGroupProps>(({
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
    if (!React.isValidElement<RadioOptionProps>(child)) {
      return child;
    }
    const item: ReactElement<RadioOptionProps> = child;
    if (item.type === RadioOption) {
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
    <Grid.Row columns="4" columnGap="0.5rem" rowGap="0.5rem" ref={ref} className={className} {...props}>
      {mappedChildren}
    </Grid.Row>
  );
});

RadioOptionGroup.displayName = 'RadioOptionGroup';

export default RadioOptionGroup;
