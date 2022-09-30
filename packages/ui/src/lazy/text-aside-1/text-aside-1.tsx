import { Container, Flex, Grid, Section, Text } from '../../components';

type TextAside1Props = {
  type: 'text-aside-1';
  description: string;
  aside: {
    title: string;
    items: string[];
  }[];
};

const TextAside1 = ({ item }: { item: TextAside1Props }) => {
  return (
    <Section borderBottom="1px solid var(--color-neutral-300)">
      <Container>
        <Grid.Row rowGap="3rem">
          <Grid sm={8}>
            <Text size="8" lineHeight="2" dangerouslySetInnerHTML={{ __html: item.description }} />
          </Grid>
          <Grid sm={4}>
            <Flex.Col gap="3rem">
              {item.aside.map((aside, a) => (
                <Flex.Col key={a} gap="1rem">
                  <Text size="6">{aside.title}</Text>
                  <Flex.Col gap="0.5rem">
                    {aside.items.map((text, t) => (
                      <Text key={t} size="8">{text}</Text>
                    ))}
                  </Flex.Col>
                </Flex.Col>
              ))}
            </Flex.Col>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  );
}

export default TextAside1;
