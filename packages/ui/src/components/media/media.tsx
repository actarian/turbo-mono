import { getClassNames, withSchema } from '@websolute/core';
import { IMedia as IMediaItem } from '@websolute/models';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getAspectResponsive, getCssResponsive } from '../../components/utils';
import { useMediaGalleryContext } from '../media-gallery/media-gallery-context';
import { MediaImage } from './media-image';

const StyledMediaInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: var(--color-neutral-100);

  ${props => getCssResponsive(props)}
`;

export type MediaInfoProps = UIStyledComponentProps;

const MediaInfo = ({ children, className, ...props }: MediaInfoProps) => {
  const classNames = getClassNames(className, 'media-info');
  return (<StyledMediaInfo className={classNames} {...props}>{children}</StyledMediaInfo>);
}

type Props = {
  circle?: boolean;
  rounded?: boolean;
  overlay?: boolean | number;
  eager?: boolean;
  item?: IMediaItem | IMediaItem[];
};

export type MediaProps = UIStyledComponentProps<Props>;

export type MediaComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

const StyledMedia = styled.div<MediaProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // color: var(--color-neutral-100);

  ${props => getCssResponsive(props)}

  &>:not(.media-info) {
    width: 100%;
    height: 100%;
  }

  &>:not(.media-info):not(.image-svg):not(svg) {
    object-fit: cover;
    background: var(--color-neutral-200);
  }

  &>svg {
    height: 100%;
  }

  ${props => props.circle ? css`
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 50%;
      &>* {
        top: 0;
        left: 0;
        height: 100%;
      }
    ` : ''};

    ${props => props.rounded ? css`
      overflow: hidden;
      border-radius: var(--border-radius);
    ` : ''};

  ${props => getAspectResponsive(props, props.circle ? { aspectRatio: 1 } : undefined)};

  ${props => props.overlay ? (css`
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      ${typeof props.overlay === 'number' ?
      (css`background: rgba(0,0,0,${props.overlay})`) :
      (css`background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 15.9%, rgba(0, 0, 0, 0) 41.67%, rgba(0, 0, 0, 0.1) 61.79%, rgba(0, 0, 0, 0.6) 100%)`)};
    }
  `) : ''}
`;

const MediaBase: MediaComponent = forwardRef(({ children, item, onClick, className, as = 'div', ...props }, ref) => {
  const classNames = getClassNames(className, 'media');

  const { id, open } = useMediaGalleryContext();

  const mediaChildren = (item && !children) ? getMediaItems(item, {
    aspectRatio: props.aspectRatio,
    eager: props.eager,
    galleryId: id,
    open,
  }) : children;

  return (<StyledMedia className={classNames} ref={ref} as={as} {...props}>{mediaChildren}</StyledMedia>);
});

MediaBase.displayName = 'Media';

export const Media = withSchema(MediaBase, {
  Info: MediaInfo,
});

function getMediaItems(itemOrItems: IMediaItem | IMediaItem[], options: {
  aspectRatio?: string | number;
  eager?: boolean;
  galleryId?: string;
  open?: (media: IMediaItem) => void;
} = {}) {
  const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
  const hasGallery = options.galleryId != null && typeof options.open === 'function';
  const getMediaItemProps = (media: IMediaItem) => {
    const props: {
      width?: string | number;
      height?: string | number;
      loading?: 'eager' | 'lazy';
      'data-gallery'?: string;
      onClick?: (event: React.MouseEvent) => void;
    } = {};
    if (hasGallery) {
      props['data-gallery'] = JSON.stringify({ galleryId: options.galleryId, media });
      props.onClick = (event: React.MouseEvent) => {
        if (options.open) {
          options.open(media);
        }
      };
    }
    if (media.type === 'image') {
      const aspectRatio = typeof options.aspectRatio === 'string' ? parseFloat(options.aspectRatio) : options.aspectRatio;
      if (aspectRatio != null) {
        props.width = 800;
        props.height = 800 / aspectRatio;
      }
      if (options.eager) {
        props.loading = 'eager';
      }
    }
    return props;
  }
  return (
    items.map((media, m) => media.type === 'video' ?
      (<video key={m} playsInline={true} autoPlay={true} muted={true} loop={true} {...getMediaItemProps(media)}>
        <source src={media.src} type="video/mp4"></source>
      </video>) :
      (<MediaImage key={m} {...media} alt={media.alt} draggable={false} {...getMediaItemProps(media)} />)
    ));
}
