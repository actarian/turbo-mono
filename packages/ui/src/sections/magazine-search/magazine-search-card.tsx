import { IEquatable } from '@websolute/core';
import { useDateTimeFormat } from '@websolute/hooks';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Flex, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: MagazineSearchItem
}

export type MagazineSearchItem = {
  id: IEquatable;
  schema?: string;
  href: string;
  date: Date | string;
  title: string;
  media: IMedia;
  category?: IEquatable;
}

export type MagazineSearchCardProps = UIStyledComponentProps<Props>;

const MagazineSearchCard: React.FC<MagazineSearchCardProps> = ({ item, ...props }: MagazineSearchCardProps) => {
  const dateTimeFormat = useDateTimeFormat({
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return (
    <Card {...props} hoverable width="100%">
      <Link href={item.href} passHref={true}>
        <Media as="a" marginBottom="2rem" item={item.media} />
      </Link>
      <Card.Content>
        <Flex.Row alignItems="flex-start" gap="2rem">
          <Text flex="100px" size="10">{dateTimeFormat(item.date)}</Text>
          <Flex.Col flex="calc(100% - 100px)" alignItems="flex-start" gap="1rem">
            <Text size="6" lineHeight="1.2" dangerouslySetInnerHTML={{ __html: item.title || 'untitled' }}></Text>
            <Button variant="nav">
              <Text size="9" textTransform="uppercase">View More</Text>
            </Button>
          </Flex.Col>
        </Flex.Row>
      </Card.Content>
    </Card>
  )
}

export default MagazineSearchCard;
