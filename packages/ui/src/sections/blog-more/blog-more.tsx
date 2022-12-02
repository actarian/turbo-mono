import Link from 'next/link';
import { Button, Card, Container, Flex, Grid, Media, MediaImage, Section, Text } from '../../components';
import { UIComponentProps } from '../../components/types';
import { BlogCard, BlogItem } from './blog-card';

type Props = {
  items: BlogItem[],
};

export type BlogMoreProps = UIComponentProps<Props>;

export const BlogMore: React.FC<BlogMoreProps> = ({ items }: BlogMoreProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Text size="2" fontWeight="700" marginBottom="3rem">More Stories</Text>
        {items && (
          <Grid.Row rowGap="3rem">
            {items.map((item, i) => (
              <Grid sm={6} key={i}>
                <BlogCard item={item}></BlogCard>
              </Grid>
            ))}
          </Grid.Row>
        )}
        {false &&
          <Grid.Row rowGap="3rem">
            <Grid sm={6}>
              <Card>
                <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} marginBottom="1rem">
                  <MediaImage src={'https://picsum.photos/640/480?u=2'} />
                </Media>
                <Card.Content>
                  <Link href="/#we-choose-to-go-to-the-moon" passHref>
                    <Button as="a" variant="link" marginBottom="1rem">
                      <Text size="5">We choose to go to the moon.</Text>
                    </Button>
                  </Link>
                  <Text size="8" marginBottom="1rem">March 8, 2020</Text>
                  <Text size="8">We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</Text>
                </Card.Content>
                <Card.Footer marginTop="1rem">
                  <Flex.Row>
                    <Media width="3rem" height="3rem" circle>
                      <MediaImage src="https://i.pravatar.cc/128?u=3" />
                    </Media>
                    <Text size="8" fontWeight="700">Joe Haddad</Text>
                  </Flex.Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={6}>
              <Card>
                <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} marginBottom="1rem">
                  <MediaImage src={'https://picsum.photos/640/480?u=4'} />
                </Media>
                <Card.Content>
                  <Link href="/#the-view-of-the-earth-from-the-moon" passHref>
                    <Button as="a" variant="link" marginBottom="1rem">
                      <Text size="5">The earth from the moon.</Text>
                    </Button>
                  </Link>
                  <Text size="8" marginBottom="1rem">March 8, 2020</Text>
                  <Text size="8">A small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is &lsquo;one world&rsquo;.</Text>
                </Card.Content>
                <Card.Footer marginTop="1rem">
                  <Flex.Row>
                    <Media width="3rem" height="3rem" circle>
                      <MediaImage src="https://i.pravatar.cc/128?u=5" />
                    </Media>
                    <Text size="8" fontWeight="700">JJ Kasper</Text>
                  </Flex.Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Row>
        }
      </Container>
    </Section>
  );
};
