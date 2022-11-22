import { getClassNames } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Container, Flex, Grid, Media, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export type TextMedia1Item = ILazyComponent & {
  schema: 'text-media-1';
  title?: string;
  abstract?: string;
  description?: string;
  media: IMedia;
};

export type TextMedia1Props = ILazyComponentProps & {
  item: TextMedia1Item;
};

export const TextMedia1: React.FC<TextMedia1Props> = ({ item }: TextMedia1Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
      <Container.Fluid>
        <Grid.Row rowGap="3rem">
          <Grid sm={6} justifyContent="center">
            <Flex.Col gap="3rem">
              {item.title && <Text size="3" dangerouslySetInnerHTML={{ __html: item.title }} />}
              {item.abstract && <Text size="6" dangerouslySetInnerHTML={{ __html: item.abstract }} />}
              {item.description && <Text size="7" dangerouslySetInnerHTML={{ __html: item.description }} />}
            </Flex.Col>
          </Grid>
          <Grid sm={6} justifyContent="center">
            <Media aspectRatio={880 / 1120} item={item.media} />
            {item.media.alt && <Text size="8" marginTop="1rem">{item.media.alt}</Text>}
          </Grid>
        </Grid.Row>
      </Container.Fluid>
    </Section>
  );
};

export const TextMedia1Export = {
  'text-media-1': dynamic<TextMedia1Props>(() => import('../text-media-1/text-media-1').then(
    module => module.TextMedia1
  )),
};
