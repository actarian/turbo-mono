// import Image, { ImageProps } from 'next/image';
import { getClassNames } from '@websolute/core';
import Image, { ImageProps } from 'next/future/image'; // !!! todo implement this
import styled from 'styled-components';
import type { UIStyledComponentProps } from '../types';

export type Props = {
  src: string;
  alt?: string;
};

export type MediaImageNextProps = UIStyledComponentProps<Props & ImageProps, 'img'>;

const StyledMediaImageNext = styled(Image)`
  max-width: 100%;
  // height: auto;
  user-select: none;
  position: relative !important;
`;

const MediaImageNext = ({ alt = '', className, ...props }: MediaImageNextProps) => {
  // return (<StyledMediaImageNext {...props} alt={alt} layout="fill" objectFit={'cover'} />);
  const classNames = getClassNames(className, 'image');
  return (<StyledMediaImageNext className={classNames} {...props} fill alt={alt} />);
}

/*
/_next/image?url={urlEncodedSrc}&w={width}&q={quality=75}

<img
  type="image"
  draggable="false"
  alt="Journal"
  class="media-image__StyledMediaImage-sc-47a65105-0 lcTsKv image"

  sizes="100vw"
  srcset="/_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2Fassets%2Fmagazine%2F10036_n_VVD_2016_Fred%20Debrock_HR_2_final_BW_880.jpg&amp;w=3840&amp;q=75"
  decoding="async"
  data-nimg="future-fill"
  loading="lazy"
  style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
>
*/

export default MediaImageNext;
