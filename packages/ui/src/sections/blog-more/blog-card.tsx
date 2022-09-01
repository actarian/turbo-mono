import Link from 'next/link';
import { Button, Card, Flex, Media, MediaType, Text } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { ArrowRight } from '../../icons';

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

export const BlogCardDefaults = {
  item: {
    id: 1,
    href: '#we-choose-to-go-to-the-moon',
    title: 'We choose to go to the moon.',
    abstract: 'We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.',
    date: '2022-06-08T07:44:24.402Z',
    media: {
      type: MediaType.Image,
      src: 'https://picsum.photos/640/480?u=2',
    },
    author: {
      fullName: 'Joe Haddad',
      media: {
        type: MediaType.Image,
        src: 'https://i.pravatar.cc/128?u=4',
      }
    }
  }
};

BlogCard.defaultProps = BlogCardDefaults;

export default BlogCard;
