import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';

export type Props = {
  src: string;
  alt?: string;
};

export type MediaImageProps = UIStyledComponentProps<Props, 'image'>;

const StyledMediaImage = styled.img`
  max-width: 100%;
`;

const MediaImage = ({ alt = '', ...props }) => {
  return (<StyledMediaImage {...props} alt={alt} />);
}

export default MediaImage;
