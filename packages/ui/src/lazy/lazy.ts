import { Carousel1Export } from './carousel-1/carousel-1';
import { Download1Export } from './download-1/download-1';
import { MediaFull1Export } from './media-full-1/media-full-1';
import { MediaFull2Export } from './media-full-2/media-full-2';
import { MediaMedia1Export } from './media-media-1/media-media-1';
import { NotFoundExport } from './not-found/not-found';
import { Related1Export } from './related-1/related-1';
import { SizesColors1Export } from './sizes-colors-1/sizes-colors-1';
import { Text1Export } from './text-1/text-1';
import { TextAside1Export } from './text-aside-1/text-aside-1';
import { TextMedia1Export } from './text-media-1/text-media-1';
import { TextText1Export } from './text-text-1/text-text-1';

export const LAZY_MODULES = {
  ...Carousel1Export,
  ...Download1Export,
  ...MediaFull1Export,
  ...MediaFull2Export,
  ...MediaMedia1Export,
  ...NotFoundExport,
  ...Related1Export,
  ...SizesColors1Export,
  ...Text1Export,
  ...TextAside1Export,
  ...TextMedia1Export,
  ...TextText1Export,
}

/*
import dynamic from 'next/dynamic';
import type { Carousel1Props } from './carousel-1/carousel-1';
import type { Download1Props } from './download-1/download-1';
import type { MediaFull1Props } from './media-full-1/media-full-1';
import type { MediaFull2Props } from './media-full-2/media-full-2';
import type { MediaMedia1Props } from './media-media-1/media-media-1';
import type { NotFoundProps } from './not-found/not-found';
import type { Related1Props } from './related-1/related-1';
import type { SizesColors1Props } from './sizes-colors-1/sizes-colors-1';
import type { Text1Props } from './text-1/text-1';
import type { TextAside1Props } from './text-aside-1/text-aside-1';
import type { TextMedia1Props } from './text-media-1/text-media-1';
import type { TextText1Props } from './text-text-1/text-text-1';

export const LAZY_MODULES = {
  'carousel-1': dynamic<Carousel1Props>(() => import('./carousel-1/carousel-1')),
  'download-1': dynamic<Download1Props>(() => import('./download-1/download-1')),
  'media-full-1': dynamic<MediaFull1Props>(() => import('./media-full-1/media-full-1')),
  'media-full-2': dynamic<MediaFull2Props>(() => import('./media-full-2/media-full-2')),
  'media-media-1': dynamic<MediaMedia1Props>(() => import('./media-media-1/media-media-1')),
  'not-found': dynamic<NotFoundProps>(() => import('./not-found/not-found')),
  'related-1': dynamic<Related1Props>(() => import('./related-1/related-1')),
  'sizes-colors-1': dynamic<SizesColors1Props>(() => import('./sizes-colors-1/sizes-colors-1')),
  'text-1': dynamic<Text1Props>(() => import('./text-1/text-1')),
  'text-aside-1': dynamic<TextAside1Props>(() => import('./text-aside-1/text-aside-1')),
  'text-media-1': dynamic<TextMedia1Props>(() => import('./text-media-1/text-media-1')),
  'text-text-1': dynamic<TextText1Props>(() => import('./text-text-1/text-text-1')),
}
*/
