import { useScrollTo } from '@websolute/hooks';
import { IMedia, IRouteLink } from '@websolute/models';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Breadcrumb, Button, Container, Grid, Media, MediaImage, Section, Text } from '../../components';
import { UIStyledComponentProps } from '../../components/types';

const ADiv = ({ children }: { children?: ReactNode }) => (<motion.div
  initial={{ position: 'absolute', width: '100%', height: '100vh', top: '-50vh', y: 0 }}
  animate={{ y: '50vh' }}
  transition={{ ease: 'linear', duration: 4, repeat: Infinity, repeatDelay: 0 }}
>{children}</motion.div>);

export type ShopCategoryHeroItem = {
  category?: string;
  href: string;
  breadcrumb: IRouteLink[];
  title?: string;
  abstract?: string;
  description?: string;
  media?: IMedia;
};

type Props = {
  item: ShopCategoryHeroItem;
};

export type ShopCategoryHeroProps = UIStyledComponentProps<Props>;

export const ShopCategoryHero: React.FC<ShopCategoryHeroProps> = ({ item, ...props }: ShopCategoryHeroProps) => {
  const scrollTo = useScrollTo();
  return (
    <Section overflow="hidden" {...props}>
      <Container padding="3rem 0">
        <Grid.Row>
          <Grid md={6}>
            {item.breadcrumb && <Breadcrumb.Group marginBottom="0.5rem" items={item.breadcrumb} />}
            {item.abstract && <Text size="2" fontWeight="700" marginBottom="1rem" dangerouslySetInnerHTML={{ __html: item.abstract }}></Text>}
            {item.description && <Text size="7" marginBottom="2rem" dangerouslySetInnerHTML={{ __html: item.description }}></Text>}
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
  );
};
