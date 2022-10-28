import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Box, Container, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export type TextText1Item = ILazyComponent & {
  schema: 'text-text-1';
  description?: string;
};

export type TextText1Props = ILazyComponentProps & {
  item: TextText1Item;
}

export const TextText1: React.FC<TextText1Props> = ({ item }: TextText1Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
      <Container>
        <Box columnCount={1} columnCountSm={2} columnGap="var(--grid-column-gap)">
          {item.description && <Text size="8" lineHeight="2" dangerouslySetInnerHTML={{ __html: item.description }} />}
        </Box>
      </Container>
    </Section>
  );
}

export const TextText1Export = {
  'text-text-1': dynamic<TextText1Props>(() => import('../text-text-1/text-text-1').then(
    module => module.TextText1
  )),
};
