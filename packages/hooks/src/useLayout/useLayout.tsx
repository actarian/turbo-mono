import type { ILayout } from '@websolute/models';
import React from 'react';
import { createGenericContext } from '../useGenericContext/useGenericContext';

export type ILayoutContext = ILayout;

const [useLayout, LayoutContextProvider] = createGenericContext<ILayoutContext>();

function LayoutProvider({ children, layout }: { children?: React.ReactNode, layout: ILayout }) {
  // console.log('LayoutProvider.context', context);
  return (
    <LayoutContextProvider value={layout}>
      {children}
    </LayoutContextProvider>
  );
}

export { useLayout, LayoutProvider };

