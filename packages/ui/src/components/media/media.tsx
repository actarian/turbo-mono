import { getClassNames } from '@websolute/core';
import { useModal } from '@websolute/hooks';
import type { IMedia as IMediaItem } from '@websolute/models';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import type { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getAspectResponsive, getCssResponsive } from '../../components/utils';
import MediaImage from './media-image';

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
  background: var(--color-neutral-200);
  // color: var(--color-neutral-100);

  ${props => getCssResponsive(props)}

  &>:not(.media-info) {
    object-fit: cover;
    width: 100%;
    height: 100%;
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

const Media: MediaComponent = forwardRef(({ children, item, className, as = 'div', ...props }, ref) => {
  const classNames = getClassNames(className, 'media');
  const mediaChildren = (item && !children) ? getMediaItems(item) : children;
  const [modal, onOpenModal, onCloseModal] = useModal();
  return (<StyledMedia className={classNames} ref={ref} as={as} onClick={() => onOpenModal('gallery')} {...props}>{mediaChildren}</StyledMedia>);
});

Media.displayName = 'Media';

(Media as IMedia).Info = MediaInfo;

export default Media as IMedia;

type IMedia = typeof Media & {
  Info: typeof MediaInfo;
};

function getMediaItems(itemOrItems: IMediaItem | IMediaItem[]) {
  const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
  return (
    items.map((media, m) => media.type === 'video' ?
      (<video key={m} playsInline={true} autoPlay={true} muted={true} loop={true}>
        <source src={media.src} type="video/mp4"></source>
      </video>) :
      (<MediaImage key={m} {...media} alt={media.alt} draggable={false} />)
    ));
}
