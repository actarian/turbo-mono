import type { IEquatable } from '@websolute/core';
import { useDateTimeFormat, useModal } from '@websolute/hooks';
import { ChevronLeft } from '@websolute/icons';
import { MagazineDetailDefaults } from '@websolute/mock';
import type { IMedia } from '@websolute/models';
import {
  Button, Container, Flex, Footer, Grid, Header, ILazyComponent, Layout, LazyLoader, MagazineRelated,
  MagazineRelatedItem, mapChildsByType, Media, Modal, NavLink, Page, Section, Text, withPageTransition
} from '@websolute/ui';

import Head from 'next/head';
import React from 'react';

export type MagazineDetailItem = {
  id: IEquatable;
  schema: string;
  date: Date | string;
  href: string;
  title: string;
  abstract: string;
  photographer: string;
  media: IMedia;
  // categoryId: IEquatable;
  category: {
    href: string;
    title: string;
  };
  components: ILazyComponent[];
  related: MagazineRelatedItem;
}

const MagazineDetail = ({ item }: MagazineDetailProps) => {
  const [modal, onOpenModal, onCloseModal] = useModal();
  const dateTimeFormat = useDateTimeFormat({
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return (
    <>
      <Head>
        <title>Magazine detail</title>
        <meta name="description" content="Magazine detail description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          <Section padding="7rem 0">
            <Container.Fluid>
              <Grid.Row rowGap="1rem">
                <Grid sm={6}>
                  <Media item={item.media} />
                </Grid>
                <Grid sm={6}>
                  <Flex.Col gap="3rem" gapSm="4rem" gapMd="5rem" gapLg="6rem">
                    <Flex.Row justifyContent="space-between">
                      <NavLink href={item.category.href} passHref>
                        <Button as="a" variant="nav">
                          <ChevronLeft />
                          <Text size="10" fontWeight="700" textTransform="uppercase">{item.category.title}</Text>
                        </Button>
                      </NavLink>
                      <Text size="10" fontWeight="700" textTransform="uppercase">{dateTimeFormat(item.date)}</Text>
                    </Flex.Row>
                    <Text size="2">{item.title}</Text>
                    <Text size="10" fontWeight="700" textTransform="uppercase">{item.photographer}</Text>
                    <Text size="7" lineHeight="2" dangerouslySetInnerHTML={{ __html: item.abstract }}></Text>
                  </Flex.Col>
                </Grid>
              </Grid.Row>
            </Container.Fluid>
          </Section>

          <LazyLoader components={item.components} />

          <MagazineRelated item={item.related} />

          <Footer />

          <Modal width="100vw" visible={modal == 'gallery'} onClose={onCloseModal}>
            <Modal.Content>
              CONTENT
            </Modal.Content>
          </Modal>

        </Page>
      </Layout>
    </>
  )
}

export type MagazineDetailProps = {
  item: MagazineDetailItem;
}

export async function getStaticProps(): Promise<{ props: MagazineDetailProps }> {
  const props = {
    item: MagazineDetailDefaults.item,
  };
  return {
    props,
  };
}

export default withPageTransition(MagazineDetail);

// !!! mappedChildren

function ImageGallery({ children }: React.PropsWithChildren) {
  const mappedChildren = mapChildsByType(children, Media, (child: React.ReactNode) => {
    console.log(child);
    return child;
  });
  // console.log(mappedChildren);
  return <>
    {children}
  </>
}
