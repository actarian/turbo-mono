import { IEquatable } from '@websolute/core';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Card, Flex, Media, MediaImage, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: ProductSearchItem
}

export type ProductSearchItem = {
  id: number;
  schema?: string;
  href: string;
  title: string;
  medias: IMedia[];
  designer?: IEquatable;
  colors: IEquatable[];
}

export type ProductsRelatedCardProps = UIStyledComponentProps<Props>;

const StyledCard = styled(Card)`
  .media{
    &>*{
      &:not(:first-child) {
        opacity: 0!important;
      }
    }
  }
  &:hover {
    .media {
      &>:nth-child(2) {
          opacity: 1!important;
      }
    }
  }
`;

const ProductsRelatedCard: React.FC<ProductsRelatedCardProps> = ({ item, ...props }: ProductsRelatedCardProps) => {
  return (
    <StyledCard {...props} hoverable>
      <Link href={item.href} passHref={true}>
        <Media aspectRatio={1} borderRadius="0.4rem" marginBottom="0.5rem">
          {item.medias.map((media, i) => (
            <MediaImage key={i} {...media} />
          ))}
        </Media>
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

export default ProductsRelatedCard;
