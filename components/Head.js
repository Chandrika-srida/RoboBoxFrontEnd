import styled, {css} from "styled-components";
import {primary,secondary,third} from "@/lib/colors";

export const HeadStyle = css`
border:0;
background: none;
font-weight: 700;
font-size: 3rem;
line-height: 1.1;
text-align: center;
text-transform: capitalize;
margin-bottom: 1rem;
color:${primary};
  }
  ${props => props.secondary && css`
  color:${secondary};
  `}
  ${props => props.third && css`
  color:${third};
  `}
  ${props => props.fourth && css`
  color:${fourth};
  `}
  ${props => props.fifth && css`
  color:${fifth};
  `}
  ${props => props.left && css`
  text-align: left;
  `}
`;


const StyledHead = styled.div`
  ${HeadStyle}
`;

export default function Head({children,...rest}) {
  return (
    <StyledHead {...rest}>{children}</StyledHead>
  );
}