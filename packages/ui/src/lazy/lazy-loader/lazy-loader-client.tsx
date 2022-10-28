import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { ILazyComponent, ILazyComponentProps } from './lazy-loader';

const lazyLoadComponent = (component: ILazyComponent) => {
  const Component = dynamic<ILazyComponentProps>(() =>
    import(`../${component.type}/${component.type}`).catch(() =>
      import(`@websolute/ui/src/lazy/not-found/not-found`)
    )
  );
  return <Component item={component} />
}

/*
const lazyLoadComponent__ = (component: string) =>
  lazy(() =>
    import(`../${component}/${component}`).catch(() =>
      import(`../not-found/not-found`)
    )
  );
*/

export function LazyLoaderClient({ components }: { components: ILazyComponent[] }) {
  const [views, setViews] = useState<JSX.Element[]>([]);

  useEffect(() => {
    async function loadViews() {
      const componentPromises = components.map(async (component, i: number) => {
        const View = await lazyLoadComponent(component);
        return <View key={i} />;
      });
      Promise.all(componentPromises).then(views => setViews(views));
    }
    loadViews();
  }, [components]);

  return (
    <React.Suspense fallback='Loading views...'>
      {views}
    </React.Suspense>
  );
}
