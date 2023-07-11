import styled from "styled-components";
import Center from "./Center";
import ButtonLink from "@/components/ButtonLink";
import Head from "@/components/Head";
import {DesStyle} from "@/components/Des";
import Bg from "@/components/Bg";
import TestiSlider from "./TestiSlider";

const Des = styled.div`
  ${DesStyle}
  font-size: 25px;
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 5vw;
  /* border: 5px solid purple; */
  margin: 50px auto;
  margin-bottom: 0px;
  height: 70vh;
`;
const IBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  padding-top: 40px;
    align-items: center;
    align-content: center;
`;
const IBox2 = styled.div`
  height: 100%;
  width: 52vw;
`;

export default function Testimonials() {
  return (
    <Bg>
      <Center>
        <Box>
          <IBox>
            <Head left>Parent Testimonials</Head>
            <Des left>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Des>
           <ButtonLink href={"/"} block primary outline>See More</ButtonLink>
          </IBox>
          <IBox2>
          <TestiSlider/>
          </IBox2>
        </Box>
      </Center>
    </Bg>
  );
}
