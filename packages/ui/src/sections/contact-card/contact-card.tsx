import { Phone } from '@websolute/icons';
import Link from 'next/link';
import { Box, Button, Card, Nav, Text } from '../../components';
import { CardProps } from '../../components/card/card';
import type { UIComponentProps } from '../../components/types';

type Props = {
  item: ContactCardItem,
} & CardProps;

export type ContactCardItem = {
  id: number;
  name: string;
  address?: string;
  province?: string;
  zipCode?: string;
  city?: string;
  country?: { id: number, name: string };
  phoneNumber?: string;
  faxNumber?: string;
  contactEmail?: string;
  pressEmail?: string;
  note?: string;
  evidence?: boolean;
  href?: string;
}

export type ContactCardProps = UIComponentProps<Props>;

const ContactCard: React.FC<ContactCardProps> = ({ item, ...props }: ContactCardProps) => {
  const getAddressLine2 = (): string => {
    const a = [];
    if (item.zipCode) {
      a.push(item.zipCode);
    }
    if (item.city) {
      a.push(item.city);
    }
    if (item.province) {
      a.push(item.province);
    }
    if (item.country) {
      a.push(item.country.name);
    }
    return a.join(', ');
  }
  const getTelLink = (value: string): string => {
    return `tel:${value.replace(/D/g, '')}`;
  }
  const getFaxLink = (value: string): string => {
    return `fax:${value.replace(/D/g, '')}`;
  }
  const getMailToLink = (value: string): string => {
    return `mailto:${value.trim()}`;
  }
  const addressLine2 = getAddressLine2();
  return (
    <Card borderTop="2px solid var(--color-primary-100)" {...props}>
      <Card.Content padding="1rem 0" flex="1" justifyContent="space-between">
        <Text fontWeight="700" marginBottom="0.5rem">{item.name}</Text>
        {item.address && <Text dangerouslySetInnerHTML={{ __html: item.address }}></Text>}
        {addressLine2 && <Text>{addressLine2}</Text>}
        <Nav.Col gap="0" paddingTop="2rem">
          {item.phoneNumber && <>
            <Link href={getTelLink(item.phoneNumber)}>
              <Button variant="link">
                <Phone /> <span>{item.phoneNumber}</span>
              </Button>
            </Link>
          </>}
          {item.faxNumber && <>
            <Link href={getFaxLink(item.faxNumber)}>
              <Button variant="link">
                <Phone /> <span>{item.faxNumber}</span>
              </Button>
            </Link>
          </>}
          {item.contactEmail && <>
            <Link href={getMailToLink(item.contactEmail)}>
              <Button variant="link">
                <Phone /> <span>{item.contactEmail}</span>
              </Button>
            </Link>
          </>}
        </Nav.Col>
        {item.pressEmail && <>
          <Box paddingTop="1rem">
            <Text size="10" fontWeight="700">Press requests</Text>
            <Link href={getMailToLink(item.pressEmail)}>
              <Button variant="link">
                <Phone /> <span>{item.pressEmail}</span>
              </Button>
            </Link>
          </Box>
        </>}
        {item.note && <>
          <Box paddingTop="1rem">
            <Text size="10" fontWeight="700">{item.note}</Text>
          </Box>
        </>}
      </Card.Content>
    </Card>
  )
}

export default ContactCard;
