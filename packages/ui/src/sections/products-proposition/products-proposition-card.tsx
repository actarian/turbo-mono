import Link from 'next/link';
import { Card, Flex, Media, MediaType, Text } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { useCurrency } from '../../hooks';

type Props = {
  item: ProductsPropositionItem
}

export type ProductsPropositionItem = {
  id: number;
  href: string;
  title: string;
  abstract: string;
  price: number;
  media: {
    type: MediaType;
    src: string;
  };
}

export type ProductsPropositionCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const ProductsPropositionCard: React.FC<ProductsPropositionCardProps> = ({ item, ...props }: ProductsPropositionCardProps) => {
  const price = useCurrency(item.price);
  return (
    <Link href={item.href}>
      <Card {...props} hoverable>
        <Media aspectRatio={4 / 3} aspectRatioMd={3 / 4} borderRadius="0.4rem" marginBottom="1rem">
          <img src={item.media.src} />
        </Media>
        <Card.Content>
          <Flex.Row justifyContent="space-between">
            <Text size="8" fontWeight="700">{item.title}</Text>
            <Text size="8" fontWeight="700">{price}</Text>
          </Flex.Row>
          <Text size="8">{item.abstract}</Text>
        </Card.Content>
      </Card>
    </Link>
  )
}

export const ProductsPropositionCardDefaults = {
  item: {
    id: 1,
    href: '/product',
    title: 'Focus Paper Refill',
    abstract: '3 sizes available',
    price: 13,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/q10VITrVYUM/download?force=true&w=960',
    },
  }
};

ProductsPropositionCard.defaultProps = ProductsPropositionCardDefaults;

export default ProductsPropositionCard;
