import styled, {css} from "styled-components";
import {primary,secondary,third,fourth} from "@/lib/colors";

export const DesStyle = css`
border:0;
background: none;
font-weight: Bold;
line-height: 1.5;
text-transform: capitalize;
font-size: 20px;
color: ${primary};
text-align: center;
}
${props => props.margin === '30px' && css`
  margin:20px 0px;
  `}
  ${props => props.left && css`
  text-align: left;
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