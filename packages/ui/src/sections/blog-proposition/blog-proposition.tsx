import { useDateTimeFormat } from '@websolute/hooks';
import { ArrowRight } from '@websolute/icons';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Container, Flex, Grid, Media, Section, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';

type Props = {
  item: BlogPropositionItem
}

export type BlogPropositionItem = {
  id: number;
  href: string;
  title: string;
  abstract: string;
  date: string | Date;
  author: {
    fullName: string;
    media: IMedia;
  };
}

export type BlogPropositionProps = UIComponentProps<Props>;

const BlogProposition: React.FC<BlogPropositionProps> = ({ item, ...props }: BlogPropositionProps) => {
  const dateTimeFormat = useDateTimeFormat({
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row>
          <Grid md={6}>
            <Text size="4" marginBottom="1rem">{item.title}</Text>
            <Text size="8" marginBottom="1rem">{dateTimeFormat(item.date)}</Text>
          </Grid>
          <Grid md={6}>
            <Text size="8" maxWidth="60ch">{item.abstract}</Text>
            <Flex.Row justifyContent="space-between" marginTop="1rem">
              <Flex>
                <Media width="3rem" height="3rem" marginRight="0.75rem" circle item={item.author.media} />
                <Text size="8" fontWeight="700">{item.author.fullName}</Text>
              </Flex>
              {false &&
                <Link href={item.href} passHref>
                  <Button as="a" variant="link"><Text>Read more</Text> <ArrowRight /></Button>
                </Link>
              }
            </Flex.Row>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default BlogProposition;
