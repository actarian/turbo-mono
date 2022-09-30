import { useScrollTo } from '@websolute/hooks';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Breadcrumb, Button, Container, Grid, Media, MediaImage, Section, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

const ADiv = ({ children }: { children?: ReactNode }) => (<motion.div
  initial={{ position: 'absolute', width: '100%', height: '100vh', top: '-50vh', y: 0 }}
  animate={{ y: '50vh' }}
  transition={{ ease: 'linear', duration: 4, repeat: Infinity, repeatDelay: 0 }}
>{children}</motion.div>);

type Props = {
}

export type ShopCategoryHeroProps = UIStyledComponentProps<Props>;

const ShopCategoryHero: React.FC<ShopCategoryHeroProps> = ({ ...props }: ShopCategoryHeroProps) => {
  const scrollTo = useScrollTo();
  return (
    <Section overflow="hidden" {...props}>
      <Container padding="3rem 0">
        <Grid.Row>
          <Grid md={6}>
            <Breadcrumb marginBottom="0.5rem">
              <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
              <Breadcrumb.Item>New Arrivals</Breadcrumb.Item>
            </Breadcrumb>
            <Text size="2" fontWeight="700" marginBottom="1rem">Summer styles are finally here</Text>
            <Text size="7" marginBottom="2rem">This year, our new summer collection will shelter you from the harsh elements of a world that doesn&apos;t care if you live or die.</Text>
            <Button as="a" href="#serp" variant="primary" onClick={scrollTo}>Shop Collection</Button>
          </Grid>
          <Grid md={6}>
            <Grid.Row columns="3" columnGap="1rem" rowGap="1rem">
              <Media rounded>
                <MediaImage src="/assets/new-arrivals/01.jpg" />
              </Media>
              <Media rounded>
                <MediaImage src="/assets/new-arrivals/02.jpg" />
              </Media>
              <Media rounded>
                <MediaImage src="/assets/new-arrivals/03.jpg" />
              </Media>
              <Media rounded>
                <MediaImage src="/assets/new-arrivals/04.jpg" />
              </Media>
              <Media rounded>
                <MediaImage src="/assets/new-arrivals/05.jpg" />
              </Media>
              <Media rounded>
                <MediaImage src="/assets/new-arrivals/06.jpg" />
              </Media>
              <Media rounded display="none">
                <MediaImage src="/assets/new-arrivals/07.jpg" />
              </Media>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default ShopCategoryHero;
