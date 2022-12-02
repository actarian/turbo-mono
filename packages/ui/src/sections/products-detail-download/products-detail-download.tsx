import { getClassNames } from '@websolute/core';
import { Lock } from '@websolute/icons';
import { ILink } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Button, Container, Flex, NavLink, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../../lazy/lazy-loader/lazy-loader';

export type ProductsDetailDownloadItem = ILazyComponent & {
  schema: string;
  title: string;
  links: ILink[];
};

export type ProductsDetailDownloadProps = ILazyComponentProps & {
  id?: string;
  item: ProductsDetailDownloadItem;
};

export const ProductsDetailDownload: React.FC<ProductsDetailDownloadProps> = ({ id, item }: ProductsDetailDownloadProps) => {
  const classNames = getClassNames(item.schema);
  if (!item) {
    return null;
  }
  return (
    <Section id={id} className={classNames} padding="6rem 0">
      <Container>
        <Flex.Col>
          {item.title && <Text size="3" marginBottom="3rem" textAlign="center">{item.title}</Text>}
          {item.links && item.links.map((link, l) => (
            <NavLink href={link.href} key={l} passHref>
              <Button as="a" variant="secondary">
                <Flex.Row width="100%">
                  {link.secure && <Lock />}
                  <Text flexGrow={1}>{link.title}</Text>
                  <Text flexBasis="20%">Download {link.type}</Text>
                </Flex.Row>
              </Button>
            </NavLink>
          ))}
        </Flex.Col>
      </Container>
    </Section>
  );
};

export const ProductsDetailDownloadExport = {
  'products-detail-download': dynamic<ProductsDetailDownloadProps>(() => import('./products-detail-download').then(
    module => module.ProductsDetailDownload
  )),
};
