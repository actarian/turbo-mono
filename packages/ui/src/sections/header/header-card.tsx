import { IEquatable } from '@websolute/core';
import type { IMedia, IRouteLink } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: HeaderCardItem;
  onSelect?: (item: IRouteLink) => void;
}

export type HeaderCardItem = {
  id: IEquatable;
  href: string;
  title: string;
  media?: IMedia;
}

export type HeaderCardProps = UIStyledComponentProps<Props, 'a'>;

const HeaderCard: React.FC<HeaderCardProps> = ({ item, onSelect, ...props }: HeaderCardProps) => {
  const onSelect_ = () => {
    onSelect && onSelect(item);
  }
  return (
    <Link href={item.href} passHref>
      <Card as="a" height="100%" hoverable onClick={onSelect_} {...props}>
        {item.media && <Media aspectRatio={3 / 2} borderRadius="0.4rem" marginBottom="1rem" item={item.media} />}
        <Card.Content flex="1">
          <Button variant="nav">
            <Text size="7" dangerouslySetInnerHTML={{ __html: item.title }}></Text>
          </Button>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default HeaderCard;
