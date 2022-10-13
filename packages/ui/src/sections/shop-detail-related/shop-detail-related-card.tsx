import { IEquatable } from '@websolute/core';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Card, Flex, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

export type ShopDetailRelatedCardItem = {
  id: IEquatable;
  href?: string;
  title?: string;
  media?: IMedia;
}

type Props = {
  item: ShopDetailRelatedCardItem
}

export type ShopDetailRelatedCardProps = UIStyledComponentProps<Props>;

const StyledCard = styled(Card)`
  .media{
    .image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      object-fit: cover;

      &:not(:first-child) {
        opacity: 0!important;
      }
    }
  }
  &:hover {
    .media {
      .image:nth-child(2) {
          opacity: 1!important;
      }
    }
  }
`;

const ShopDetailRelatedCard: React.FC<ShopDetailRelatedCardProps> = ({ item, ...props }: ShopDetailRelatedCardProps) => {
  return (
    <StyledCard {...props} hoverable>
      <Link href={item.href || '#'} passHref>
        <Media as="a" aspectRatio={1} borderRadius="0.4rem" marginBottom="1.5rem" item={item.media} />
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Button variant="nav">
            <Text size="8" dangerouslySetInnerHTML={{ __html: item.title || 'untitled' }}></Text>
          </Button>
        </Flex.Row>
      </Card.Content>
    </StyledCard>
  )
}

export default ShopDetailRelatedCard;
