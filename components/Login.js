import Center from "./Center";
import styled from "styled-components";
import {third} from "@/lib/colors"; 
import Head from "@/components/Head";
import {DesStyle} from "@/components/Des";
import ButtonLink from "./ButtonLink";
import Bg from "@/components/Bg";

const Des = styled.div`
  ${DesStyle};
  margin:4vh 0px;
  font-weight: normal;
`;


const SubHead = styled.div`
font-weight: bold;
font-size: 2rem;
text-transform: capitalise;
`;

const Box = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 5vw;
// border: 5px solid purple;
margin: 5vh auto;
margin-bottom: 0px;
justify-content:space-between;
`;
const IBoxc = styled.div`
background-color: ${third};
padding: 5vh;
// border-radius: 20px;
// border: 5px solid purple;
`;

export default function Login() {
  return (
    <Bg>
      <Center>
        <Head>School Management Systems</Head>
        <Box>
          <IBoxc>
            <SubHead>For Teachers</SubHead>
            <Des left>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate et hic voluptatibus fugit rerum, eos, aut perferendis
              at nesciunt 
            </Des>
            <ButtonLink href={"/"}>Login</ButtonLink>
            <Des>Don't have an account?</Des>
            <ButtonLink fourth href={"/"}>Sign Up</ButtonLink>
          </IBoxc>
          <IBoxc>
            <SubHead>For Students</SubHead>
            <Des left>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate et hic voluptatibus fugit rerum, eos, aut perferendis
              at nesciunt 
            </Des>
            <ButtonLink href={"/"}>Login</ButtonLink>
            <Des>Don't have an account?</Des>
            <ButtonLink fourth href={"/"}>Sign Up</ButtonLink>
          </IBoxc>
        </Box>
      </Center>
    </Bg>
  );
}
