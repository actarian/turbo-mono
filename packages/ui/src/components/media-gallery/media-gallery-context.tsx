import { IMedia } from '@websolute/models';
import { createContext, useContext } from 'react';

export interface MediaGalleryConfig {
  id?: string;
  open?: (media?: IMedia | IMedia[]) => void;
  close?: () => void;
}

export const MediaGalleryContext = createContext<MediaGalleryConfig>({});

export function useMediaGalleryContext(): MediaGalleryConfig {
  return useContext<MediaGalleryConfig>(MediaGalleryContext);
}
