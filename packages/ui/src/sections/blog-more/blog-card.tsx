import { ArrowRight } from '@websolute/icons';
import Link from 'next/link';
import { Button, Card, Flex, Media, MediaType, Text } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';

type Props = {
  item: BlogItem
}

export type BlogItem = {
  id: number;
  href: string;
  title: string;
  abstract: string;
  date: string | Date;
  media: {
    type: MediaType;
    src: string;
  };
  author: {
    fullName: string;
    media: {
      type: MediaType;
      src: string;
    };
  };
}

export type BlogCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const BlogCard: React.FC<BlogCardProps> = ({ item, ...props }: BlogCardProps) => {
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
    <Link href={item.href}>
      <Card height="100%" hoverable {...props}>
        <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} borderRadius="0.4rem" marginBottom="1rem">
          <img src={item.media.src} />
        </Media>
        <Card.Content flex="1">
          <Text size="5">{item.title}</Text>
          <Text size="8" marginBottom="1rem">{getDate(item.date)}</Text>
          <Text size="8">{item.abstract}</Text>
        </Card.Content>
        <Card.Footer marginTop="1rem">
          <Flex.Row justifyContent="space-between">
            <Flex>
              <Media width="3rem" height="3rem" marginRight="0.75rem" circle>
                <img src={item.author.media.src} />
              </Media>
              <Text size="8" fontWeight="700">{item.author.fullName}</Text>
            </Flex>
            {false &&
              <Link href={item.href}>
                <Button variant="link" as="a"><Text>Read more</Text> <ArrowRight /></Button>
              </Link>
            }
          </Flex.Row>
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default BlogCard;
