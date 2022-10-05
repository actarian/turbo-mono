import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Box, Container, Section, Text } from '../../components';
import type { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export interface TextText1Item extends ILazyComponent {
  schema: 'text-text-1';
  description?: string;
};

export interface TextText1Props extends ILazyComponentProps {
  item: TextText1Item;
}

const TextText1: React.FC<TextText1Props> = ({ item }: TextText1Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
      <Container>
        <Box columnCount={2} columnGap="var(--grid-column-gap)">
          {item.description && <Text size="8" lineHeight="2" dangerouslySetInnerHTML={{ __html: item.description }} />}
        </Box>
      </Container>
    </Section>
  );
}

export default TextText1;

export const TextText1Export = {
  'text-text-1': dynamic<TextText1Props>(() => import('../text-text-1/text-text-1')),
};
