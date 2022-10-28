import { IEquatable } from '@websolute/core';
import { IMedia } from '@websolute/models';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Card, Flex, Media, Text } from '../../components';
import { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: ProductSearchItem
}

export type ProductSearchItem = {
  href: string;
  title: string;
  medias: IMedia[];
  designer?: IEquatable;
  colors: IEquatable[];
}

export type ProductsSearchCardProps = UIStyledComponentProps<Props>;

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

export const ProductsSearchCard: React.FC<ProductsSearchCardProps> = ({ item, ...props }: ProductsSearchCardProps) => {
  return (
    <StyledCard {...props} hoverable>
      <Link href={item.href} passHref>
        <Media as="a" aspectRatio={1} borderRadius="0.4rem" marginBottom="0.5rem" item={item.medias} />
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
