import { IRouteLink } from '@websolute/models';
import NextLink from 'next/link';
import { UIStyledComponentProps } from '../../components/types';
import { Breadcrumb } from './breadcrumb';

export type Props = {
  items: IRouteLink[];
};

export type BreadcrumbGroupProps = UIStyledComponentProps<Props>;

export function BreadcrumbGroup({ items, ...props }: BreadcrumbGroupProps) {
  // console.log('BreadcrumbGroup', items);
  return (
    <>
      <Breadcrumb {...props}>
        {items.map((x, i) => (
          i < items.length - 1 && x.href ?
            <NextLink key={i} href={x.href} passHref>
              <Breadcrumb.Item nextLink>{x.title}</Breadcrumb.Item>
            </NextLink> :
            <Breadcrumb.Item key={i}>{x.title}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
}
