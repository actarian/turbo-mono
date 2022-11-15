import React, { ComponentPropsWithRef, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Box, Code, Flex, List, Section, Text } from '../../components';
import { FontSize } from '../../components/text/text';
import { UIComponentProps } from '../../components/types';
import { ITheme } from '../../styles/theme';

type Props = {
}

export type TypographyProps = UIComponentProps<Props>;

type TypographyTextProps = ComponentPropsWithRef<'div'> & {
  type: string;
  size: string;
  s: number;
}

const TypographyText: React.FC<TypographyTextProps> = React.forwardRef<HTMLDivElement, TypographyTextProps>(({ type, size, s }: TypographyTextProps, ref?: React.Ref<HTMLDivElement>) => {
  switch (type) {
    case 'primary':
      return (<Text ref={ref} size={s + 1 as FontSize} textTransform="capitalize">{type} size {s + 1}</Text>);
    case 'secondary':
      return (<Text.Secondary ref={ref} size={s + 1 as FontSize} textTransform="capitalize">{type} size {s + 1}</Text.Secondary>);
    default:
      return null;
  }
});

TypographyText.displayName = 'TypographyText';

const TypographyItem = (props: { type: string, size: string, s: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [px, setPx] = useState('0px');
  useEffect(() => {
    if (ref.current) {
      setPx(window.getComputedStyle(ref.current).fontSize);
    }
  }, []);
  return (
    <List>
      <TypographyText ref={ref} {...props} />
      <Flex.Row justifyContent="space-between" paddingTop="1rem">
        <Code fontSize="0.7rem">{props.size}</Code>
        <Code fontSize="0.7rem">{px}</Code>
      </Flex.Row>
    </List>
  );
};

export const Typography = (props: TypographyProps) => {
  const theme = useContext(ThemeContext) as ITheme;
  return (
    <Section padding="3rem 0">
      {Object.entries(theme.font).map(([key, value]: [string, { family: string, size: string[], lineHeight: string[] }], k) => (
        <Box key={key} padding="0 1rem 3rem 1rem">
          <Code>{value.family}</Code>
          {value.size.map((size: string, s: number) => (
            <TypographyItem key={s} type={key} size={size} s={s} />
          ))}
        </Box>
      ))}
    </Section>
  );
}
