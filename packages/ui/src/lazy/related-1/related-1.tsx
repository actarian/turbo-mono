import { getClassNames, IEquatable } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Container, Grid, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';
import { Related1Card } from './related-1-card';

export type Related1Item = ILazyComponent & {
  schema: 'text-media-1';
  title?: string;
  items: {
    id: IEquatable;
    href: string;
    title: string;
    media: IMedia;
  }[];
};

export type Related1Props = ILazyComponentProps & {
  item: Related1Item;
}

export const Related1: React.FC<Related1Props> = ({ item }: Related1Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
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

export const Related1Export = {
  'related-1': dynamic<Related1Props>(() => import('../related-1/related-1').then(
    module => module.Related1
  )),
};
