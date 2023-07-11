import Head from "@/components/Head";
import Button from "@/components/Button";
import Center from "./Center";
import styled from "styled-components";
import { third } from "@/lib/colors";
import {BgStyle} from "@/components/Bg";
import Link from "next/link";

const Bg=styled.div`
${BgStyle};
height: 90vh;
`;
const Box = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 5vw;
height:60vh;
text-align:center;
justify-items:center;
`;

const IBox = styled(Link)`
display: grid;
justify-items:center;
padding-top:5vh;
img{
  height:40vh; 
}
`;


export default function Support() {
  return (
    <Bg>
      <Center>
        <Head>OUR SUPPORT</Head>
        <Box>
          <IBox href="/" >
            <img src="images/contact.png" alt="contactImage"/>
            <br/>
            <Button secondary>Call Us</Button>
          </IBox>
          <IBox href="/" >
            <img src="images/counselling.png" alt="contactImage" />
            <br/>
            <Button secondary>Career Counsellor</Button>
          </IBox>
        </Box>
      </Center>
    </Bg>
  );
}
