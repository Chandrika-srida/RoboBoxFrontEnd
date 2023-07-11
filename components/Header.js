import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { fourth, primary } from "@/lib/colors";
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
font-size: 1rem;
position: fixed;
z-index: 2;
width: 100%;
font-weight: bold;
border-box:box-sizing;
`; 

const Logo = styled(Link)`

`;

const Wrapper = styled.div`
display: flex;
justify-content:space-around;
// justify-content:space-between;
// justify-content:space-evenly;
padding: 0.5rem 0px; 
    align-items: center;
    align-content: center;
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
color: ${fourth};
padding: 0.2rem;
height: 2rem;
text-transform: capitalize;
font-size: 1.3rem;
border-radius: 5px;
transition: all 0.2s ease-in-out;
&:hover {
  border: 2px solid ${fourth};
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
      width: '100vw',
      height: '10vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      border:'0',
      backgroundImage: `url("images/Main_bbg.png")`,
    }}>
      <Wrapper>
      <Logo href={"/"}>
        <img src="images/logo_bbg.png"
        height='50px'/>
      </Logo>          
          <StyledNav mobileNavActive={mobileNavActive}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/products"}>Products</NavLink>
          <NavLink href={"/#deal"}>Today's deal</NavLink>
          <NavLink href={"/workshops"}>Workshops</NavLink>
          <NavLink href={"/"}>Quizes</NavLink>
          <NavLink href={"/#support"}>Customer Service</NavLink>     
          <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavLink href={"/#login"}>Login</NavLink>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
      </Wrapper>
    </StyledHeader>
  );
}
