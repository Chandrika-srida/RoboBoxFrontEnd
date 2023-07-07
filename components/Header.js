import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { primary } from "@/lib/colors";
import { ButtonStyle } from "./Button"; 
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledHeader = styled.header`
font-size: 20px;
position: fixed;
width: 100%;
font-weight: bold;
`; 

const Logo = styled(Link)``;

const Wrapper = styled.div`
display: flex;
justify-content:space-around;
// justify-content:space-between;
// justify-content:space-evenly;
padding: 15px 0px;  
align-items: center;

  & > div:first-child {
    margin-right: auto;
  }
`;


const StyledNav = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}

  display: flex;
gap: 25px;
text-transform: capitalize;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  animation: ${fadeIn} 0.3s ease-in-out;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
${ButtonStyle};
background-color: transparent;
color: ${primary};
padding: 8px;
text-transform: capitalize;
font-size: 20px;
border-radius: 5px;

transition: all 0.2s ease-in-out;
&:hover {
  border: 2px solid ${primary};
}
  @media screen and (min-width: 768px) {
  }
`;

const NavButton = styled.button`
  
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    
    <StyledHeader 
    style={{
      paddingLeft: '20px',
      width: '100%',
      height: '60',
      backgroundSize: 'cover',
      border:'0',
      backgroundImage: `url("images/Main_Bbg.png")`,
    }}>
      <Wrapper>
      <Logo href={"/"}>
        <img src="images/logo_Bbg.png"
        height='50px'/>
      </Logo>          
          <StyledNav mobileNavActive={mobileNavActive}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/products"}>Products</NavLink>
          <NavLink href={"/dealsPage"}>Today's deal</NavLink>
          <NavLink href={"/workshops"}>Workshops</NavLink>
          <NavLink href={"/"}>Quizes</NavLink>
          <NavLink href={"/supportPage"}>Customer Service</NavLink>     
          <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavLink href={"/loginPage"}>Login</NavLink>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
      </Wrapper>
    </StyledHeader>
  );
}
