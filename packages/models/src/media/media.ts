
export type IMediaType = 'image' | 'video' | string;

export type IMedia = {
  src: string;
  type: IMediaType;
  alt?: string;
  title?: string;
  abstract?: string;
  width?: number;
  height?: number;
  url?: string; // !!! todo remap payloadcms media
  media?: IMedia; // !!! todo remap payloadcms media
};
