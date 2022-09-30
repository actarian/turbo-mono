import dynamic from 'next/dynamic';
import React from 'react';
import { Skeleton } from '../../components';

export type ILazyComponent = {
  type: string;
  [key: string]: unknown;
}

export type ILazyComponentProps = {
  item: ILazyComponent;
}

const lazyLoadComponent = (component: ILazyComponent): JSX.Element => {
  const Component = dynamic<ILazyComponentProps>(() =>
    import(`../${component.type}/${component.type}`).catch(() =>
      import(`../not-found/not-found`)
    )
  );
  return (<Component item={component} />);
}

const LazyLoader = ({ components }: { components: ILazyComponent[] }) => {
  return (
    <>
      {components.map((component, i: number) => (
        <React.Suspense key={i} fallback={<Skeleton minHeight="50vh" />}>
          {lazyLoadComponent(component)}
        </React.Suspense>
      ))}
    </>
  );
}

export default LazyLoader;
