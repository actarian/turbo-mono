import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Container, Flex, Grid, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export interface TextAside1Item extends ILazyComponent {
  schema: 'text-aside-1';
  description: string;
  aside: {
    title: string;
    items: string[];
  }[];
};

export interface TextAside1Props extends ILazyComponentProps {
  item: TextAside1Item;
}

export const TextAside1: React.FC<TextAside1Props> = ({ item }: TextAside1Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
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

export const TextAside1Export = {
  'text-aside-1': dynamic<TextAside1Props>(() => import('../text-aside-1/text-aside-1').then(
    module => module.TextAside1
  )),
};
