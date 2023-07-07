import Head from "@/components/Head";
import Button from "@/components/Button";
import Center from "./Center";
import styled from "styled-components";
import { third } from "@/lib/colors";
import Bg from "@/components/Bg";

const Box = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
text-align:center;
margin-top:100px;
justify-items:center;
`;

const IBox = styled.div`
display: grid;
justify-items:center;
gap: 20px;
`;


export default function Support() {
  return (
    <Bg>
      <Center>
        <Head>OUR SUPPORT</Head>
        <Box>
          <IBox>
            <img src="images/contact.png" alt="contactImage" width="200px" />
            <br/>
            <Button secondary>Call Us</Button>
          </IBox>
          <IBox>
            <img src="images/counselling.png" alt="contactImage" width="200px" />
            <br/>
            <Button secondary>Career Counsellor</Button>
          </IBox>
        </Box>
      </Center>
    </Bg>
  );
}
