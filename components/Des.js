import styled, {css} from "styled-components";
import {primary,secondary,third,fourth} from "@/lib/colors";

export const DesStyle = css`
border:0;
background: none;
font-weight: Bold;
line-height: 1.5;
text-transform: capitalize;
font-size: 1.3rem;
color: ${primary};
text-align: center;
}
${props => props.margin === '30px' && css`
  margin:20px 0px;
  `}
  ${props => props.left && css`
  text-align: left;
  `}
  ${props => props.secondary && css`
  color:${secondary};
  `}
  ${props => props.third && css`
  color:${third};
  `}
  ${props => props.fourth && css`
  color:${fourth};
  `}
  
`;


const StyledDes = styled.div`
  ${DesStyle}
`;

export default function Des({children,...rest}) {
  return (
    <StyledDes {...rest}>{children}</StyledDes>
  );
}