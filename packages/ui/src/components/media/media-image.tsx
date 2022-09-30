import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';

export type Props = {
  src: string;
  alt?: string;
};

export type MediaImageProps = UIStyledComponentProps<Props & ImageProps, 'img'>;

const StyledMediaImage = styled(Image)`
  max-width: 100%;
  user-select: none;
`;

const MediaImage = ({ alt = '', ...props }: MediaImageProps) => {
  return (<StyledMediaImage {...props} alt={alt} layout="fill" objectFit={'cover'} />);
}

export default MediaImage;
