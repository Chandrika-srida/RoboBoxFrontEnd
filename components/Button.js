import styled, {css} from "styled-components";
import {primary,secondary,third,fourth} from "@/lib/colors";

export const ButtonStyle = css`
border: 0;
background-color: ${primary};
color: ${fourth};
font-weight: 600;
font-size: 1.5rem;
height: 3rem;
justify-self:center;
align-self:center;
text-transform: uppercase;
border-radius: 8px;
text-align: center;
padding: 0.5rem 1rem;  
letter-spacing: 0.05rem;
  ${props => props.fourth && css`
  background-color: ${fourth};
color: ${primary};
  `}
  ${props => props.secondary && css`
  background-color: ${secondary};
color: ${primary};
  `}
  ${props => props.third && css`
  background-color: ${third};
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