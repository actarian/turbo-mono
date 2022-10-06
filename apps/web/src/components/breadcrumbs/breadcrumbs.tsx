import type { IRouteLink } from '@websolute/models';
import { Breadcrumb } from '@websolute/ui';
import NextLink from 'next/link';

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // console.log('Breadcrumbs', items);
  return (
    <>
      <Breadcrumb>
        {items.map((x, i) => (
          i < items.length - 1 && x.href ?
            <NextLink key={i} href={x.href}>
              <Breadcrumb.Item nextLink>{x.title}</Breadcrumb.Item>
            </NextLink> :
            <Breadcrumb.Item key={i}>{x.title}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
}

export type BreadcrumbsProps = {
  items: IRouteLink[];
};
