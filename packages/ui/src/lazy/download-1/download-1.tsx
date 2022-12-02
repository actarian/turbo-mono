import { getClassNames } from '@websolute/core';
import { Lock } from '@websolute/icons';
import { ILink } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Button, Container, Flex, NavLink, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export type Download1Item = ILazyComponent & {
  schema: 'download-1';
  title: string;
  links: ILink[];
};

export type Download1Props = ILazyComponentProps & {
  item: Download1Item;
};

export const Download1: React.FC<Download1Props> = ({ item }: Download1Props) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section className={classNames} padding="6rem 0">
      <Container>
        <Flex.Col>
          {item.title && <Text size="3" marginBottom="3rem" textAlign="center">{item.title}</Text>}
          {item.links && item.links.map((link, l) => (
            <NavLink href={link.href} key={l} passHref>
              <Button as="a" variant="secondary">
                <Flex.Row width="100%">
                  {link.secure && <Lock />}
                  <Text flexGrow={1}>{link.title}</Text>
                  <Text flexBasis="20%">Download {link.type}</Text>
                </Flex.Row>
              </Button>
            </NavLink>
          ))}
        </Flex.Col>
      </Container>
    </Section>
  );
};

export const Download1Export = {
  'download-1': dynamic<Download1Props>(() => import('../download-1/download-1').then(
    module => module.Download1
  )),
};
