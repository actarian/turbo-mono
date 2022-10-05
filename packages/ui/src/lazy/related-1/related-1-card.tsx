import { IEquatable } from '@websolute/core';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Card, Flex, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

export type Related1ItemItem = {
  id: IEquatable;
  href: string;
  title: string;
  media: IMedia;
}

type Props = {
  item: Related1ItemItem
}

export type Related1CardProps = UIStyledComponentProps<Props>;

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

const Related1Card: React.FC<Related1CardProps> = ({ item, ...props }: Related1CardProps) => {
  return (
    <StyledCard {...props} hoverable>
      <Link href={item.href} passHref={true}>
        <Media as="a" aspectRatio={880 / 550} borderRadius="0.4rem" marginBottom="1.5rem" item={item.media} />
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Button variant="nav">
            <Text size="6" dangerouslySetInnerHTML={{ __html: item.title || 'untitled' }}></Text>
          </Button>
        </Flex.Row>
      </Card.Content>
    </StyledCard>
  )
}

export default Related1Card;
