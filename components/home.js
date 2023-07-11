import Center from "./Center";
import styled from "styled-components";
import Link from "next/link";
import {secondary, fourth} from "@/lib/colors";
import Button from "@/components/Button";
// import ButtonLink from "./ButtonLink";
import { ButtonStyle } from "@/components/Button";
import { DesStyle } from "@/components/Des";
import {HeadStyle} from "@/components/Head";

const ButtonLink=styled(Link)`
${ButtonStyle}
border-radius: 0px;
box-shadow: 0px 15px 10px grey;
padding-left: 5vw;
padding-right: 5vw;
`;

const Head = styled.div`
  ${HeadStyle}
  font-size: 4rem;
  margin:0;
  padding: 0;
`;

const Des = styled.div`
  ${DesStyle}
  text-align:left;
  big{
    display:block;
    font-size: 2rem;
  }
  small{
    display:block;
    font-size: 1.5rem;
  }
`;

const Image = styled.div`
justify-self: center;
`;
const Boxc = styled.div`
  display: grid;
  align-items: center;
  justify-content:space-between;
  align-content: center;
  grid-template-columns: 1fr 2fr;
  // border:solid black 2px;
  padding-top: 7vh;
`;

const IBox = styled.div`
display:grid;
gap: 5vh;
`;

export default function Home() {
  return (
      <Center>
        <Boxc>
            <IBox>
            <Head secondary left>Unleash the creator
            inside you !</Head>
            <Des fourth>
            <small>turn your curious <br/> thinker today into</small>
            <big>creators of tomorrow</big>
          </Des>
          <ButtonLink secondary href={"/products"}>shop now</ButtonLink>
            </IBox>
          <Image>
          <img src="images/room.png" alt="roomImage" width="500px" />
          </Image>
        </Boxc>
      </Center>
  );
}
