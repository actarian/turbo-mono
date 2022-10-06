import type { IEquatable } from '@websolute/core';
import { useDateTimeFormat } from '@websolute/hooks';
import { ChevronLeft } from '@websolute/icons';
import { MagazineDetailDefaults } from '@websolute/mock';
import type { IMedia } from '@websolute/models';
import {
  Button, Container, Flex, Footer, Grid, Header, ILazyComponent, Layout, LazyLoader, MagazineRelated,
  MagazineRelatedItem, mapChildsByType, Media, MediaGallery, NavLink, Page, Section, Text, withPageTransition
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

const MagazineDetail = ({ page }: MagazineDetailProps) => {
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

          <MediaGallery>

            <Section padding="7rem 0">
              <Container.Fluid>
                <Grid.Row rowGap="1rem">
                  <Grid sm={6}>
                    <Media item={page.media} />
                  </Grid>
                  <Grid sm={6}>
                    <Flex.Col gap="3rem" gapSm="4rem" gapMd="5rem" gapLg="6rem">
                      <Flex.Row justifyContent="space-between">
                        <NavLink href={page.category.href} passHref>
                          <Button as="a" variant="nav">
                            <ChevronLeft />
                            <Text size="10" fontWeight="700" textTransform="uppercase">{page.category.title}</Text>
                          </Button>
                        </NavLink>
                        <Text size="10" fontWeight="700" textTransform="uppercase">{dateTimeFormat(page.date)}</Text>
                      </Flex.Row>
                      <Text size="2">{page.title}</Text>
                      <Text size="10" fontWeight="700" textTransform="uppercase">{page.photographer}</Text>
                      {page.abstract && <Text size="7" lineHeight="2" dangerouslySetInnerHTML={{ __html: page.abstract }}></Text>}
                    </Flex.Col>
                  </Grid>
                </Grid.Row>
              </Container.Fluid>
            </Section>

            <LazyLoader components={page.components} />

          </MediaGallery>

          <MagazineRelated item={page.related} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export type MagazineDetailProps = {
  page: MagazineDetailItem;
}

export async function getStaticProps(): Promise<{ props: MagazineDetailProps }> {
  const props = {
    page: MagazineDetailDefaults.item,
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
