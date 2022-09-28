import { ArrowRight } from '@websolute/icons';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Container, Flex, Grid, Media, MediaImage, Section, Text } from '../../components';
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
  const getDate = (value: Date | string): string => {
    const date = value instanceof Date ? value : new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      // weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedValue = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedValue;
  };
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row>
          <Grid md={6}>
            <Text size="4" marginBottom="1rem">{item.title}</Text>
            <Text size="8" marginBottom="1rem">{getDate(item.date)}</Text>
          </Grid>
          <Grid md={6}>
            <Text size="8" maxWidth="60ch">{item.abstract}</Text>
            <Flex.Row justifyContent="space-between" marginTop="1rem">
              <Flex>
                <Media width="3rem" height="3rem" marginRight="0.75rem" circle>
                  <MediaImage {...item.author.media} />
                </Media>
                <Text size="8" fontWeight="700">{item.author.fullName}</Text>
              </Flex>
              {false &&
                <Link href={item.href}>
                  <Button variant="link" as="a"><Text>Read more</Text> <ArrowRight /></Button>
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
