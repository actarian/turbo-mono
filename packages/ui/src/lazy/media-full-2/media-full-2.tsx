import { getClassNames } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Container, Media, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export type MediaFull2Item = ILazyComponent & {
  schema: 'media-full-1';
  media: IMedia;
};

export type MediaFull2Props = ILazyComponentProps & {
  item: MediaFull2Item;
}

export const MediaFull2: React.FC<MediaFull2Props> = ({ item }: MediaFull2Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
      <Container.Fluid>
        <Media aspectRatio={16 / 10} item={item.media} />
        {item.media.alt && <Text size="8" marginTop="1rem">{item.media.alt}</Text>}
      </Container.Fluid>
    </Section>
  );
}

export const MediaFull2Export = {
  'media-full-2': dynamic<MediaFull2Props>(() => import('../media-full-2/media-full-2').then(
    module => module.MediaFull2
  )),
};
