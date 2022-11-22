import { useDrawer, useModal } from '@websolute/hooks';
import Link from 'next/link';
import { Button, Container, Flex, Section, Text } from '../../components';
import { UIComponentProps } from '../../components/types';

type Props = {
};

export type PropositionProps = UIComponentProps<Props>;

export const Proposition: React.FC<PropositionProps> = (props: PropositionProps) => {
  const [modal, openModal, closeModal] = useModal();
  const [drawer, openDrawer, closeDrawer] = useDrawer();
  return (
    <>
      <Section padding="7rem 0" background="var(--color-primary-100)" color="var(--color-primary-900)">
        <Container>
          <Flex.Col justifyContent="center" alignItems="center">
            <Text size="3" fontWeight="700" marginBottom="2rem">Prow scuttle parrel provost Sail.</Text>
            <Link href="https://design-system-ruddy.vercel.app" target="_blank" passHref>
              <Button as="a" variant="primary" marginBottom="1rem">Read documentation</Button>
            </Link>
            <Link href="https://github.com/actarian/design-system" target="_blank" passHref>
              <Button as="a" variant="link">view on GitHub</Button>
            </Link>
            <Button as="a" variant="link" onClick={() => openModal('foreign-market')}>open modal</Button>
          </Flex.Col>
        </Container>
      </Section>
    </>
  );
};
