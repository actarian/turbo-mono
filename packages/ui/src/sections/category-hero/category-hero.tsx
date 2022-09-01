import { Breadcrumb, Button, Container, Grid, Media, NavLink, Section, Text } from '@ui-components';
import { ComponentCssResponsiveProps } from '@ui-components/types';
import { useScrollTo } from '@ui-hooks';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const ADiv = ({ children }: { children?: ReactNode }) => (<motion.div
  initial={{ position: 'absolute', width: '100%', height: '100vh', top: '-50vh', y: 0 }}
  animate={{ y: '50vh' }}
  transition={{ ease: 'linear', duration: 4, repeat: Infinity, repeatDelay: 0 }}
>{children}</motion.div>);

type Props = {
}

export type CategoryHeroProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const CategoryHero: React.FC<CategoryHeroProps> = ({ ...props }: CategoryHeroProps) => {
  const scrollTo = useScrollTo();
  return (
    <Section overflow="hidden" {...props}>
      <Container padding="3rem 0">
        <Grid.Row>
          <Grid md={6}>
            <Breadcrumb marginBottom="0.5rem">
              <Breadcrumb.Item href="/products">Shop</Breadcrumb.Item>
              <Breadcrumb.Item>New Arrivals</Breadcrumb.Item>
            </Breadcrumb>
            <Text size="2" fontWeight="700" marginBottom="1rem">Summer styles are finally here</Text>
            <Text size="7" marginBottom="2rem">This year, our new summer collection will shelter you from the harsh elements of a world that doesn&apos;t care if you live or die.</Text>
            <NavLink href="#serp" passHref>
              <Button variant="primary" onClick={scrollTo}>Shop Collection</Button>
            </NavLink>
          </Grid>
          <Grid md={6}>
            <Grid.Row columns="3" columnGap="1rem" rowGap="1rem">
              <Media rounded>
                <img src="/new-arrivals/01.jpg" />
              </Media>
              <Media rounded>
                <img src="/new-arrivals/02.jpg" />
              </Media>
              <Media rounded>
                <img src="/new-arrivals/03.jpg" />
              </Media>
              <Media rounded>
                <img src="/new-arrivals/04.jpg" />
              </Media>
              <Media rounded>
                <img src="/new-arrivals/05.jpg" />
              </Media>
              <Media rounded>
                <img src="/new-arrivals/06.jpg" />
              </Media>
              <Media rounded display="none">
                <img src="/new-arrivals/07.jpg" />
              </Media>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default CategoryHero;
