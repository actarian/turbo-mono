import dynamic from 'next/dynamic';
import { Container, Section, Text } from '../../components';
import type { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export interface NotFoundItem extends ILazyComponent {
  schema: string,
  title?: string;
};

export interface NotFoundProps extends ILazyComponentProps {
  item: NotFoundItem;
}

const NotFound: React.FC<NotFoundProps> = ({ item }: NotFoundProps) => {
  return (
    <Section borderBottom="1px solid var(--color-neutral-300)">
      <Container textAlign="center">
        <Text size="5" marginBottom="1rem">not found {item.schema}</Text>
        {item.title && <Text size="3" marginBottom="1rem">{item.title}</Text>}
        <code>{JSON.stringify(item, null, 2)}</code>
      </Container>
    </Section>
  );
}

export default NotFound;

export const NotFoundExport = {
  'not-found': dynamic<NotFoundProps>(() => import('../not-found/not-found')),
};
