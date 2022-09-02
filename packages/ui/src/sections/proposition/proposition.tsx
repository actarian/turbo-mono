import { useDrawer, useModal } from '@websolute/hooks';
import Link from 'next/link';
import { Button, Container, Flex, Section, Text } from '../../components';
import { ComponentProps } from '../../components/types';

type Props = {
}

export type PropositionProps = ComponentProps<Props, HTMLDivElement>;

const Proposition: React.FC<PropositionProps> = (props: PropositionProps) => {
  const [modal, onOpenModal, onCloseModal] = useModal();
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  return (
    <>
      <Section padding="7rem 0" background="var(--color-primary-100)" color="var(--color-primary-900)">
        <Container>
          <Flex.Col justifyContent="center" alignItems="center">
            <Text size="3" fontWeight="700" marginBottom="2rem">Prow scuttle parrel provost Sail.</Text>
            <Link href="https://design-system-ruddy.vercel.app" target="_blank">
              <Button variant="primary" as="a" marginBottom="1rem" onClick={() => onOpenModal('foreign-market')}>Read documentation</Button>
            </Link>
            <Link href="https://github.com/actarian/design-system" target="_blank">
              <Button variant="link" as="a" onClick={() => onOpenDrawer('cart')}>view on GitHub</Button>
            </Link>
          </Flex.Col>
        </Container>
      </Section>
    </>
  )
}

export default Proposition;
