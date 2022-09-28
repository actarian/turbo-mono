import { Icons as IconList } from '@websolute/icons';
import { createElement, FunctionComponent, Suspense, useMemo, useState } from 'react';
import { Card, Code, Container, Flex, Media, Modal, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';
import { Input } from '../../forms';

type Props = {
}

export type IIcon = {
  key: string;
  component: FunctionComponent<unknown>;
}

export type IconsProps = UIComponentProps<Props>;

const SectionIcons: React.FC<IconsProps> = (props: IconsProps) => {
  const [showModal, setShowModal] = useState(false);
  const [icon, setIcon] = useState<IIcon | null>(null);
  const onSetIcon = (icon: IIcon | null = null) => {
    const visible = icon !== null;
    console.log('onSetIcon', icon, visible);
    setShowModal(visible);
    if (visible) {
      setIcon(icon);
    }
  }
  const iconsList = useMemo<IIcon[]>(() => {
    return Object.keys(IconList).map((key) => {
      return { key, component: IconList[key as keyof typeof IconList] as unknown as FunctionComponent<unknown> };
    });
  }, []);
  const [visibleIcons, setVisibleIcons] = useState<IIcon[]>(iconsList);
  function onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    // console.log(query);
    const icons = iconsList.filter(x => x.key.toLowerCase().indexOf(query) !== -1);
    setVisibleIcons(icons);
  }
  return (
    <>
      <Container.Fluid padding="3rem 0">
        <Text size="4" fontWeight="700" marginBottom="2rem">Search Icon</Text>
        <Input name="search" placeholder="start typing..." onChange={onSearch} marginBottom="2rem" />
        <Flex.Row gap="1rem" justifyContent="center" flexWrap="wrap">
          {visibleIcons.map(icon => (
            <Card key={icon.key} onClick={() => onSetIcon(icon)} type="alfa" flexGrow="1" width="180px" padding="0.5rem" border="2px solid var(--color-neutral-200)" hoverable>
              <Media padding="1rem" height="4rem">
                <Suspense fallback={<div>Loading...</div>}>{createElement(icon.component, {})}</Suspense>
              </Media>
              <Card.Content textAlign="center">
                <Text size="10">{icon.key}</Text>
              </Card.Content>
            </Card>
          ))}
        </Flex.Row>
      </Container.Fluid>
      <Modal width="30rem" visible={showModal} onClose={() => onSetIcon(null)}>
        <Modal.Title>
          <Text size="7" fontWeight="700">{icon && icon.key}</Text>
        </Modal.Title>
        <Modal.Content>
          {icon &&
            <Media height="5rem" padding="1rem" marginBottom="1rem">
              <Suspense fallback={<div>Loading...</div>}>{createElement(icon.component, {})}</Suspense>
            </Media>
          }
          <Code>{`import { ${icon && icon.key} } from '@websolute/icons';`}</Code>
        </Modal.Content>
        <Modal.Button variant="default" passive onClick={() => onSetIcon(null)}>Close</Modal.Button>
      </Modal>
    </>
  );
}

export default SectionIcons;
