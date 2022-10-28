
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useEffect, useState } from 'react';
import { Flex } from '../../components';
import { SizeVariant, UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { Radio } from './radio';

type Props = Omit<ComponentPropsWithRef<'input'>, 'size'> & {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioGroupProps = UIStyledComponentProps<Props, 'input'>;

export type RadioGroupComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

export const RadioGroup: RadioGroupComponent = forwardRef(({
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

  const mappedChildren = recursiveMap(children, (child: ReactElement) => {
    if (child.type === Radio) {
      const props = child.props;
      return React.cloneElement(child, {
        ...props,
        size: props.size || size,
        checked: props.value === value,
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

RadioGroup.displayName = 'RadioGroup';

function recursiveMap(children: React.ReactNode, fn: (child: ReactElement) => ReactElement): ReactElement[] {
  return React.Children.map(children as ReactElement[], child => {
    if (!React.isValidElement(child)) {
      return child;
    }
    if ((child as ReactElement).props.children) {
      const props = {
        children: recursiveMap((child as ReactElement).props.children, fn)
      }
      child = React.cloneElement(child, props);
    }
    return fn(child);
  });
}
