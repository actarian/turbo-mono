
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useState } from 'react';
import { Grid } from '../../components';
import type { SizeVariant, UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import RadioOption, { RadioOptionProps } from './radio-option';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioOptionGroupProps = UIStyledComponentProps<Props, 'input'>;

export type RadioOptionGroupComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

const RadioOptionGroup: RadioOptionGroupComponent = forwardRef(({
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

  // !!! ref to group

  return (
    <Grid.Row columns="4" columnGap="0.5rem" rowGap="0.5rem" ref={ref} className={className} {...props}>
      {mappedChildren}
    </Grid.Row>
  );
});

RadioOptionGroup.displayName = 'RadioOptionGroup';

export default RadioOptionGroup;
