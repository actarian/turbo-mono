
import { Svg, SvgProps } from '@ui-components';
import { SVGProps } from 'react';
import styled from 'styled-components';

const StyledCheckboxChecked = styled(Svg)`
  width: 24px;
  height: 24px;
  display: none;

  input:checked ~ & {
    display: block;
  }
`;

const StyledCheckboxUnchecked = styled(Svg)`
  width: 24px;
  height: 24px;
  display: block;

  input:checked ~ & {
    display: none;
  }
`;

const CheckboxCheckedSvg: React.FC<SvgProps> = ({ className, ...props }: SvgProps) => (
  <StyledCheckboxChecked viewBox='0 0 24 24' fill='currentcolor' className={className} {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </StyledCheckboxChecked>
)

const CheckboxUncheckedSvg: React.FC<SvgProps> = ({ className, ...props }: SvgProps) => (
  <StyledCheckboxUnchecked viewBox='0 0 24 24' fill='currentcolor' className={className} {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </StyledCheckboxUnchecked>
)

export const CheckboxIcon: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <>
    <CheckboxCheckedSvg {...props} />
    <CheckboxUncheckedSvg {...props} />
  </>
);
