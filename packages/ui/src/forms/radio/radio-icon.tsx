
import { Svg, SvgProps } from '@ui-components';
import { SVGProps } from 'react';
import styled from 'styled-components';

const StyledRadioChecked = styled(Svg)`
  width: 24px;
  height: 24px;
  display: none;

  input:checked ~ & {
    display: block;
  }
`;

const StyledRadioUnchecked = styled(Svg)`
  width: 24px;
  height: 24px;
  display: block;

  input:checked ~ & {
    display: none;
  }
`;

const RadioCheckedSvg: React.FC<SvgProps> = ({ className, ...props }: SvgProps) => (
  <StyledRadioChecked viewBox='0 0 24 24' fill='currentcolor' className={className} {...props}>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </StyledRadioChecked>
)

const RadioUncheckedSvg: React.FC<SvgProps> = ({ className, ...props }: SvgProps) => (
  <StyledRadioUnchecked viewBox='0 0 24 24' fill='currentcolor' className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </StyledRadioUnchecked>
)

export const RadioIcon: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <>
    <RadioCheckedSvg {...props} />
    <RadioUncheckedSvg {...props} />
  </>
);
