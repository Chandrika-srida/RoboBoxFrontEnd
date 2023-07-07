import Center from "./Center";
import styled from "styled-components";
import Link from "next/link";
import {secondary, fourth} from "@/lib/colors";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";
import { DesStyle } from "@/components/Des";
import Head from "@/components/Head";

const Des = styled.div`
  ${DesStyle}
  line-height: 1.8;
  text-align:right;
  big{
    display:block;
    font-size: 40px;
  }
  small{
    display:block;
    font-size: 25px;
  }
`;


const Boxc = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 2.5fr 1fr;
  gap: 25px;
  margin-top: 60px;
`;

const iBoxr = styled.div``;

export default function Home() {
  return (
      <Center>
        <Boxc>
            <iBoxr>
            <Head left>Unleash the creator inside you !</Head>
            <ButtonLink href={"/products"} block primary outline>shop now</ButtonLink>
            </iBoxr>
          <img src="images/room.png" alt="roomImage" width="500px" />
          <Des>
            <small>turn your curious</small>
            <small>thinker today into</small>
            <big>creators of </big>
            <big>tomorrow</big>
          </Des>
        </Boxc>
      </Center>
  );
}
