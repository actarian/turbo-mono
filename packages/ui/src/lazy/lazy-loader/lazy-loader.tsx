import dynamic from 'next/dynamic';
import React from 'react';
import { Skeleton } from '../../components';
import { LAZY_MODULES } from '../lazy';

export type ILazyComponent = {
  schema: string;
  [key: string]: unknown;
};

export type ILazyComponentProps = {
  item: ILazyComponent;
};

const lazyLoadComponent_ = (component: ILazyComponent): JSX.Element => {
  const Component = dynamic<ILazyComponentProps>(() =>
    import(`../${component.schema}/${component.schema}`).catch(() =>
      import('../not-found/not-found')
    )
  );
  return (<Component item={component} />);
};

const lazyLoadComponent = (component: ILazyComponent): JSX.Element => {
  const key = component.schema as unknown as keyof typeof LAZY_MODULES;
  const Component = (LAZY_MODULES[key] as unknown as React.FC<ILazyComponentProps>) || LAZY_MODULES['not-found'];
  return (<Component item={component} />);
};

export const LazyLoader = ({ components }: { components: ILazyComponent[] }) => {
  return (
    <>
      {components.map((component, i: number) => (
        <React.Suspense key={i} fallback={<Skeleton minHeight="50vh" />}>
          {lazyLoadComponent(component)}
        </React.Suspense>
      ))}
    </>
  );
};

/*

// !!! how to import a component

// default

const SomeComponent = React.lazy(
  () => import('./SomeComponent')
);

or

// named

const SomeComponent = React.lazy(
  () => import('./SomeComponent').then(module => ({ default: module.SomeComponent }))
);

or

const SomeComponent = React.lazy(
  () => import('./SomeComponent').then(module => module.SomeComponent)
);

*/
