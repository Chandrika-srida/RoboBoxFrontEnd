import styled, {css} from "styled-components";
import {fifth} from "@/lib/colors";

export const BgStyle = css`
height: 100vh;
padding-top: 10vh;
box-sizing: border-box;
background-color: ${fifth};
text-align: center;
width:100%; 
`;


const StyledBg = styled.div`
  ${BgStyle}
`;

export default function Bg({children,...rest}) {
  return (
    <StyledBg {...rest}>{children}</StyledBg>
  );
}