import {BgStyle} from "@/components/Bg";
import styled from "styled-components";
import {primary,third, fourth} from "@/lib/colors";
import {ButtonStyle} from "@/components/Button";
import Link from "next/link";
import Des from "@/components/Des";

const Bg=styled.div`
${BgStyle};
height:50vh;
`;
const Box1=styled.div`
height: 25vh;
box-sizing: border-box;
background-color: ${third};
text-align: center;
`;
const Box2=styled.div`
height: 25vh;
box-sizing: border-box;
background-color: ${primary};
text-align: center;
display:grid;
grid-template-rows: 3fr 1fr;
div{
    color: ${fourth};
    font-size: 18px;
}
`;
const IBox=styled.div`
display:flex;
display: flex;
justify-content:center;
align-content: center;
align-items: center;
gap:20px;
`;
const Box3=styled.div`
height: 10vh;
width: 33%;
position: relative;
left: 33vw;
bottom:30vh;
z-index: 1;
// border:solid black 3px;
box-sizing: border-box;
background-color: ${fourth};
text-align: center;
padding:20px
`;

const NavLink = styled(Link)`
${ButtonStyle};
background-color: transparent;
color: ${fourth};
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

export default function Footer() {
    return (
        <Bg>
            <Box1></Box1>
            <Box2>
                <IBox>
                <NavLink href={"/products"}>DIY KITS</NavLink>
          <NavLink href={"/"}>COURSES</NavLink>
          <NavLink href={"/workshops"}>WORKSHOPS</NavLink>
          <NavLink href={"/"}>SCHOLARSHIPS</NavLink>
          <NavLink href={"/supportPage"}>CONTACT US</NavLink>     
          <NavLink href={"/"}>FAQ's</NavLink>
                </IBox>
                <div>
                    &copy; 2023 RoboBox. All rights reserved
                </div>
            </Box2>
            <Box3>
                <Des>Follow us on instagram: @Therobobox </Des>
            </Box3>
        </Bg>
    );
}