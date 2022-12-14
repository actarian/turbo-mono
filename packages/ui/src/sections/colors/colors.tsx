import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Code, Flex, Section, Text } from '../../components';
import { UIComponentProps } from '../../components/types';

type Props = {
};

export type ColorsProps = UIComponentProps<Props>;

export const Colors: React.FC<ColorsProps> = (props: ColorsProps) => {
  const theme = useContext(ThemeContext);
  const color: any = theme.color;
  const keys = Object.keys(color);
  // const sizes = new Array(9).fill().map((_, i) => (i + 1) * 100);
  return (
    <Section>
      {keys.map((key) => (
        <Flex.Row key={key} gap="0">
          {Object.keys(color[key]).map(size => (
            <Flex key={size}
              position="relative"
              flexShrink="1"
              width={100 / 9 + '%'}
              aspectRatio={1}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              backgroundColor={color[key][size]}
            >
              <Text size="10" color={color[key][(parseInt(size) >= 500 ? '100' : '900')]}>{key} {size}</Text>
              <Text size="10" color={color[key][(parseInt(size) >= 500 ? '100' : '900')]}>{color[key][size]}</Text>
              {false && <Code fontSize="0.8rem" position="absolute" right="0.3rem" bottom="0.3rem">{color[key][size]}</Code>}
            </Flex>
          ))}
        </Flex.Row>
      ))}
    </Section>
  );
};
