import React from 'react';
import { createGenericContext } from '../useGenericContext/useGenericContext';
import { useLayout } from '../useLayout/useLayout';

export type ILabelContext = (key: string, params?: { [key: string]: any }) => string;

const [useLabel, LabelContextProvider] = createGenericContext<ILabelContext>();

function LabelProvider({ children }: { children?: React.ReactNode }) {

  const { locale, labels } = useLayout() || { locale: '*', labels: [] };

  // console.log('LabelProvider', locale);

  const dictionary = Object.fromEntries(labels.map(l => [l.id, l.text]));

  const context = (key: string, params?: { [key: string]: any }): string => {
    const label = (dictionary[key] != null ? dictionary[key] : key) as string;
    if (params) {
      return parseParams(label, params);
    }
    return label;
  };

  // console.log('LabelProvider.context', context);
  return (
    <LabelContextProvider value={context}>
      {children}
    </LabelContextProvider>
  );
}

function parseParams(label: string, params: { [key: string]: any }): string {
  const TEMPLATE_REGEXP: RegExp = /@(\w+)/g;
  return label.replace(TEMPLATE_REGEXP, (text: string, key: string) => {
    const replacer: string = params[key].toString();
    return typeof replacer !== 'undefined' ? replacer : text;
  });
}

export { useLabel, LabelProvider };

