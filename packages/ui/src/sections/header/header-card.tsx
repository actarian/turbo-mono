import type { IMedia, IRouteLink } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Media, MediaImage, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: HeaderCardItem;
  onSelect?: (item: IRouteLink) => void;
}

export type HeaderCardItem = {
  href?: string;
  title?: string;
  media?: IMedia;
}

export type HeaderCardProps = UIStyledComponentProps<Props>;

const HeaderCard: React.FC<HeaderCardProps> = ({ item, onSelect, ...props }: HeaderCardProps) => {
  const onSelect_ = () => {
    onSelect && onSelect(item);
  }
  return (
    <Link href={item.href || '#'}>
      <Card height="100%" hoverable {...props} onClick={onSelect_}>
        {item.media && <Media aspectRatio={3 / 2} borderRadius="0.4rem" marginBottom="1rem">
          <MediaImage {...item.media} />
        </Media>}
        <Card.Content flex="1">
          <Button variant="nav" as="a">
            {item.title && <Text size="7" dangerouslySetInnerHTML={{ __html: item.title }}></Text>}
          </Button>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default HeaderCard;
