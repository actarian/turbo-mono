import { ILayout, IPage } from '@websolute/models';
import { ReservedAreaMenu } from '@websolute/ui';
import { Breadcrumb, Container, Grid, Section } from '../../components';
import { UIComponentProps } from '../../components/types';

type Props = {
  children?: React.ReactNode;
  layout: ILayout;
  page: IPage,
};

export type ReservedAreaProps = UIComponentProps<Props>;

export const ReservedArea: React.FC<ReservedAreaProps> = ({ children, layout, page }: ReservedAreaProps) => {

  const menu = layout.topLevelRoutes.reserved_area?.items;

  return (
    <>
      <Section className="print-none">
        <Container>
          <Breadcrumb.Group items={page.breadcrumb} />
        </Container>
      </Section>
      <Section padding="0 0 3rem 0">
        <Container minHeight="50vh">
          <Grid.Row>
            {/* Left menu sticky column */}
            <Grid className="print-none" display="none" displaySm="block" sm={4} md={3}>
              {menu && <ReservedAreaMenu items={menu} />}
            </Grid>
            {/* Right main content */}
            <Grid sm={8} md={9}>
              {children}
            </Grid>
          </Grid.Row>
          {/* (
            <Flex.Responsive gap="1rem" alignItemsSm="stretch">
              <Box flexBasis="260px">
                {menu && <ReservedAreaMenu items={menu} />}
              </Box>
              <Box flexGrow="1">
                {children}
              </Box>
            </Flex.Responsive>
          )*/}
        </Container>
      </Section>
    </>
  );
};
