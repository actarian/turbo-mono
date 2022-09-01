import { Card, Container, Grid, Media, Section, Text } from '@ui-components';
import { ComponentProps } from '@ui-components/types';

type Props = {
}

export type HeroProps = ComponentProps<Props, HTMLDivElement>;

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <Section padding="0">
      <Card justifyContent="flex-end" height="100vh">
        <Card.Background>
          <Media overlay>
            <img draggable={false} alt="Trusted Group" src="https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600" />
          </Media>
        </Card.Background>
        <Card.Content>
          <Container.Fluid>
            <Grid.Row>
              <Grid md={6} padding="3rem 0">
                <Text size="2" fontWeight="700">Sustainable agriculture</Text>
              </Grid>
              <Grid md={6} padding="3rem 0">
                <Text size="6">We combine technology and creativity for the farmers of today and tomorrow.</Text>
              </Grid>
            </Grid.Row>
          </Container.Fluid>
        </Card.Content>
      </Card>
    </Section>
  )
}

export default Hero;
