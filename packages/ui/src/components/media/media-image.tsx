// import Image, { ImageProps } from 'next/image';
import { getClassNames } from '@websolute/core';
import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';

export type Props = {
  src: string;
  alt?: string;
};

// export type MediaImageProps = UIStyledComponentProps<Props & ImageProps, 'img'>;
export type MediaImageProps = UIStyledComponentProps<Props, 'img'>;

// const StyledMediaImage = styled(Image)`
const StyledMediaImage = styled.img`
  max-width: 100%;
  user-select: none;
`;

const MediaImage = ({ alt = '', className, ...props }: MediaImageProps) => {
  // return (<StyledMediaImage {...props} alt={alt} layout="fill" objectFit={'cover'} />);
  const classNames = getClassNames(className, 'image');
  return (<StyledMediaImage className={classNames} {...props} alt={alt} />);
}

export default MediaImage;
