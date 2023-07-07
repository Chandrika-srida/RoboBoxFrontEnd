import styled, {css} from "styled-components";
import {primary,secondary,third,fourth} from "@/lib/colors";

export const BgStyle = css`
height: 100vh;
padding-top:70px;
box-sizing: border-box;
background-color: ${third};
text-align: center;
  
`;


const StyledBg = styled.div`
  ${BgStyle}
`;

export default function Bg({children,...rest}) {
  return (
    <StyledBg {...rest}>{children}</StyledBg>
  );
}