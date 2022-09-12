import { PhoneCall } from '@websolute/icons';
import Link from 'next/link';
import { Button, Card, Container, Grid, Media, MediaType, Section, Text } from '../../components';
import { ComponentProps } from '../../components/types';

type Props = {
  item: SplitItem,
}

export type SplitItemLink = {
  href: string;
  label: string;
}

export type SplitItem = {
  id: number;
  href: string;
  caption: string;
  title: string;
  abstract: string;
  link: SplitItemLink;
  media: {
    type: MediaType;
    src: string;
  };
}

export type SplitProps = ComponentProps<Props, HTMLDivElement>;

const Split: React.FC<SplitProps> = ({ item }: SplitProps) => {
  return (
    <Section>
      <Container.Fluid>
        <Card borderRadius="0.4rem" overflow="hidden">
          <Card.Background>
            <Media overlay={0.3}>
              <img src={item.media.src} />
            </Media>
            {false &&
              <Media overlay={0.2} backgroundColor="var(--color-neutral-500)">
                <img src={item.media.src} style={{ mixBlendMode: 'multiply' }} />
              </Media>
            }
          </Card.Background>
          <Grid.Row flex="1" columnGap="0">
            <Grid sm={6} background="linear-gradient(90deg, var(--color-neutral-900), transparent)">
              <Card.Content justifyContent="center" height="100%" padding="2rem" paddingSm="5rem Max(2vw, Min(48px, 2.5vw))" textAlign="center" textAlignSm="left">
                <Text size="10" marginBottom="0.5rem" textTransform="uppercase">{item.caption}</Text>
                <Text size="3" marginBottom="0.5rem">{item.title}</Text>
                <Text size="7" marginBottom="3rem" maxWidthSm="40ch">{item.abstract}</Text>
                {item.link &&
                  <Link href={item.link.href}>
                    <Button variant="secondary"><span>{item.link.label}</span> <PhoneCall /></Button>
                  </Link>
                }
              </Card.Content>
            </Grid>
            <Grid sm={6}></Grid>
          </Grid.Row>
        </Card>
      </Container.Fluid>
    </Section>
  )
}

export default Split;
