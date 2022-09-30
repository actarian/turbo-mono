import { IEquatable } from '@websolute/core';
import type { IMedia } from '@websolute/models';
import { Container, Grid, Section, Text } from '../../components';
import Related1Card from './related-1-card';

type Related1Props = {
  type: 'text-media-1';
  title?: string;
  items: {
    id: IEquatable;
    href: string;
    title: string;
    media: IMedia;
  }[];
};

const Related1 = ({ item }: { item: Related1Props }) => {
  return (
    <Section borderBottom="1px solid var(--color-neutral-300)">
      <Container>
        {item.title && <Text size="3" textAlign="center" marginBottom="4rem" dangerouslySetInnerHTML={{ __html: item.title }} />}
        <Grid.Row rowGap="3rem">
          {item.items.map((related, r) => (
            <Grid key={r} sm={6} justifyContent="center">
              <Related1Card item={related} />
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  );
}

export default Related1;
