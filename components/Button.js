import styled, {css} from "styled-components";
import {primary,secondary,third,fourth} from "@/lib/colors";

export const ButtonStyle = css`
border: 0;
background-color: ${primary};
color: ${fourth};
font-weight: 600;
font-size: 25px;
text-transform: uppercase;
border-radius: 8px;
text-align: center;
padding: 10px 30px;  
letter-spacing: 0.5px;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  ${props => props.fourth && css`
  background-color: ${fourth};
color: ${primary};
  `}
  ${props => props.secondary && css`
  background-color: ${secondary};
color: ${primary};
  `}

`;


const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}