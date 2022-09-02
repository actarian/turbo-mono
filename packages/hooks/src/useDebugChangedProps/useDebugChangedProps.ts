import { ComponentProps, useEffect, useRef } from 'react';

export function useDebugChangedProps(props: ComponentProps<any>): void {
  const prev = useRef(props);

  useEffect(() => {

    const changedProps = Object.entries(props).reduce((object: { [key: string]: unknown }, [key, value]) => {
      if (prev.current[key] !== value) {
        object[key] = [prev.current[key], value];
      }
      return object;
    }, {});

    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }

    prev.current = props;
  });
}
