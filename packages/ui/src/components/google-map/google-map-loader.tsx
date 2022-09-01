
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

export enum GoogleMapLoaderStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export interface GoogleMapLoaderProps extends LoaderOptions {
  skeleton?: (status: GoogleMapLoaderStatus) => ReactElement;
  onStatus?: (status: GoogleMapLoaderStatus, loader: Loader) => void;
  children?: ReactNode;
}

// https://github.com/denakol/google-maps-react-suspense/blob/master/src/GoogleMapsLoader.ts

const GoogleMapLoader = ({
  skeleton,
  onStatus,
  children,
  ...options
}: GoogleMapLoaderProps): ReactElement => {

  const [loader, setLoader] = useState<Loader>();

  const [status, setStatus] = useState(GoogleMapLoaderStatus.Loading);

  // console.log('loader', loader);

  // meh fires two times

  useEffect(() => {
    let invalidate = false;
    if (!loader) {
      // console.log('new Loader', status, loader);
      const loader_ = new Loader(options);
      setLoader(loader_);
      const setStatus_ = (status: GoogleMapLoaderStatus) => {
        if (onStatus) {
          onStatus(status, loader_);
        }
        setStatus(status);
      };
      setStatus_(GoogleMapLoaderStatus.Loading);
      loader_.load().then(
        () => !invalidate && setStatus_(GoogleMapLoaderStatus.Success),
        () => !invalidate && setStatus_(GoogleMapLoaderStatus.Error)
      );
    }
    return () => {
      // console.log('invalidate');
      invalidate = true;
    };
  }, []);

  if (status === GoogleMapLoaderStatus.Success && children) {
    return <>{children}</>;
  }

  if (skeleton) {
    return skeleton(status);
  }

  return <></>;
};

export default GoogleMapLoader;
