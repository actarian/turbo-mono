import { getClassNames } from '@websolute/core';
import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';

export type Props = {
  src: string;
  alt?: string;
  type?: string;
};

export type MediaImageProps = UIStyledComponentProps<Props, 'img'>;

const StyledMediaImage = styled.img`
  max-width: 100%;
  // height: auto;
  user-select: none;
`;

const MediaImage = ({ alt = '', className, type, ...props }: MediaImageProps) => {
  const classNames = getClassNames(className, 'image', { 'image-svg': isSVG(props.src) });
  const imageProps = getImageProps(props);
  return (<StyledMediaImage className={classNames} alt={alt} loading="lazy" {...imageProps} />);
}

export default MediaImage;

function getImageProps({ src, ...props }: MediaImageProps & Omit<MediaImageProps, 'type'>) {
  const ratio = props.width && props.height ? (parseInt(props.width.toString()) / parseInt(props.height.toString())) : 0;
  const sizes = [640, 828, 1080, 1200, 1920];
  return {
    src: getImageSrc(src, ratio, sizes[0]),
    srcSet: getImageSrcset(src, ratio, sizes),
    sizes: ratio !== 0 ? getImageSizes(sizes) : '100vw',
    ...props,
  }
}

function getImageSrc(src: string, ratio: number, width: number, quality: number = 75): string {
  if (isSVG(src)) {
    return src;
  }
  return ratio !== 0 ?
    `/_next/image?url=${encodeURIComponent(src)}&w=${width}&h=${width / ratio}&q=${quality}` :
    `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

function getImageSrcset(src: string, ratio: number, widths: number[], quality: number = 75): string | undefined {
  if (isSVG(src)) {
    return undefined;
  }
  return widths.map(width => getImageSrc(src, ratio, width, quality) + ` ${width}w`).join(', ');
}

function getImageSizes(widths: number[]): string {
  return widths.map((width, i) => `${i < widths.length - 1 ? `(max-width: ${width}px) ` : ''}${width}px`).join(', ');
}

function isSVG(src: string): boolean {
  return src.indexOf('.svg') !== -1;
}

/*
function encodeURIComponentRFC3986(text: string): string {
  return encodeURIComponent(text).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}
*/

/*
<img

loading="lazy"

width="100vw" || width="800" height="400"

src="/_next/image?url={url}&w=640&q=75"

srcset="
/_next/image?url={url}&w=640&q=75 640w,
/_next/image?url={url}&w=828&q=75 828w,
/_next/image?url={url}&w=1080&q=75 1080w,
/_next/image?url={url}&w=1200&q=75 1200w,
/_next/image?url={url}&w=1920&q=75 1920w
"

sizes="(max-width: 640px) 640px,
(max-width: 828px) 828px,
(max-width: 1080px) 1080px,
(max-width: 1200px) 1200px,
1920px"

/>


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

deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
*/
