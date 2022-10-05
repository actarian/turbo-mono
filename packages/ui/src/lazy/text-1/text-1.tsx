import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Box, Container, Section, Text } from '../../components';
import type { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export interface Text1Item extends ILazyComponent {
  schema: 'text-1';
  description?: string;
};

export interface Text1Props extends ILazyComponentProps {
  item: Text1Item;
}

const Text1: React.FC<Text1Props> = ({ item }: Text1Props) => {
  // !!! Container.Small
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
      <Container>
        <Box maxWidth="800px" margin="0 auto">
          {item.description && <Text size="5" lineHeight="2" dangerouslySetInnerHTML={{ __html: item.description }} />}
        </Box>
      </Container>
    </Section>
  );
}

export default Text1;

export const Text1Export = {
  'text-1': dynamic<Text1Props>(() => import('../text-1/text-1')),
};
