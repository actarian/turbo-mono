import { getClassNames } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Media } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export interface MediaFull1Item extends ILazyComponent {
  schema: 'media-full-1';
  media: IMedia;
};

export interface MediaFull1Props extends ILazyComponentProps {
  item: MediaFull1Item;
}

export const MediaFull1: React.FC<MediaFull1Props> = ({ item }: MediaFull1Props) => {
  const classNames = getClassNames('media', item.schema);
  return (
    <Media className={classNames} aspectRatio={16 / 10} item={item.media} />
  );
}

export const MediaFull1Export = {
  'media-full-1': dynamic<MediaFull1Props>(() => import('../media-full-1/media-full-1').then(
    module => module.MediaFull1
  )),
};
