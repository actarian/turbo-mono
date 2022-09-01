import Link from 'next/link';
import { Button, Container, Flex, Grid, Media, Section, Text } from '../../components';
import { ComponentProps } from '../../components/types';
import { ArrowRight } from '../../icons';

type Props = {
}

export type BlogPropositionProps = ComponentProps<Props, HTMLDivElement>;

const BlogProposition: React.FC<BlogPropositionProps> = (props: BlogPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row>
          <Grid md={6}>
            <Text size="4" marginBottom="1rem">There is no strife, no prejudice, no national conflict in outer space as yet.</Text>
            <Text size="8" marginBottom="1rem">March 8, 2020</Text>
          </Grid>
          <Grid md={6}>
            <Text size="8" maxWidth="60ch">Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain?</Text>
            <Flex.Row justifyContent="space-between" marginTop="1rem">
              <Flex>
                <Media width="3rem" height="3rem" marginRight="0.75rem" circle>
                  <img src="https://i.pravatar.cc/128?u=1" />
                </Media>
                <Text size="8" fontWeight="700">Tim Neutkens</Text>
              </Flex>
              {false &&
                <Link href="#blog">
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
