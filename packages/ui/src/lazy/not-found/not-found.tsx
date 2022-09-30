import { Container, Section, Text } from '../../components';

const NotFound = ({ item }: { item: { type: string, title?: string } }) => {
  return (
    <Section borderBottom="1px solid var(--color-neutral-300)">
      <Container textAlign="center">
        <Text size="5" marginBottom="1rem">not found {item.type}</Text>
        {item.title && <Text size="3" marginBottom="1rem">{item.title}</Text>}
        <code>{JSON.stringify(item, null, 2)}</code>
      </Container>
    </Section>
  );
}

export default NotFound;
