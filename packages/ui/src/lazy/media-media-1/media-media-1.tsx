import { getClassNames } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Container, Grid, Media, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export type MediaMedia1Item = ILazyComponent & {
  schema: 'media-media-1';
  medias: IMedia[];
};

export type MediaMedia1Props = ILazyComponentProps & {
  item: MediaMedia1Item;
}

export const MediaMedia1: React.FC<MediaMedia1Props> = ({ item }: MediaMedia1Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
      <Container.Fluid>
        <Grid.Row rowGap="3rem">
          {item.medias.map((media, i) => (
            <Grid key={i} sm={6} justifyContent="center">
              <Media item={media} />
              {media.alt && <Text size="8" marginTop="1rem">{media.alt}</Text>}
            </Grid>
          ))}
        </Grid.Row>
      </Container.Fluid>
    </Section>
  );
}

export const MediaMedia1Export = {
  'media-media-1': dynamic<MediaMedia1Props>(() => import('../media-media-1/media-media-1').then(
    module => module.MediaMedia1
  )),
};
