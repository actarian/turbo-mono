import { IMedia } from '@websolute/models';
import { Media, MediaImage } from '../../components';

type MediaFull1Props = {
  type: 'media-full-1';
  media: IMedia;
};

const MediaFull1 = ({ item }: { item: MediaFull1Props }) => {
  return (
    <Media className="media" aspectRatio={16 / 10}>
      {item.media.type === 'video' ?
        (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
          <source src={item.media.src} type="video/mp4"></source>
        </video>) :
        (<MediaImage {...item.media} alt={item.media.alt} draggable={false} />)}
    </Media>
  );
}

export default MediaFull1;
