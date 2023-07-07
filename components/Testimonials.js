import styled from "styled-components";
import { primary, secondary,third } from "@/lib/colors";
import Center from "./Center";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import Head from "@/components/Head";
import {DesStyle} from "@/components/Des";
import Bg from "@/components/Bg";

const Des = styled.div`
  ${DesStyle}
  font-size: 25px;
`;

const ProductWrapper = styled.div`
background-color:white;
border-radius: 15px;
text-align:center;
padding: 20px;
`;

const WhiteBox = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 180px;
  }
`;

const ProductInfoBox = styled.div`
  display:grid;
  align-items:center;
  align-content: center;
  grid-template-rows: 1fr 2fr;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  row-gap: 50px;
  column-gap: 100px;
  /* border: 5px solid purple; */
  margin: 50px auto;
  margin-bottom: 0px;
`;
const IBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.2fr;
  height: 100%;
  // border:white solid 2px;
`;
const IBox2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 70%;
  gap: 20px;
  // border:white solid 2px;
`;

export default function Testimonials() {
  return (
    <Bg>
      <Center>
        <Box>
          <IBox>
            <Head left>Parent Testimonials</Head>
            <Des>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Des>
           <ButtonLink href={"/"} block primary outline>See More</ButtonLink>
          </IBox>
          <IBox2>
          <ProductWrapper>
            <WhiteBox>
              {/* <img src={images?.[0]} alt="" /> */}
            </WhiteBox>
            <ProductInfoBox>
            <Des>* * * * * </Des>
              <Des>Pastel Long Sleeve</Des>
            </ProductInfoBox>
          </ProductWrapper>
          <ProductWrapper>
            <WhiteBox>
              {/* <img src={images?.[0]} alt="" /> */}
            </WhiteBox>
            <ProductInfoBox>
            <Des>* * * * * </Des>
            <Des>Pastel Long Sleeve</Des>
            </ProductInfoBox>
          </ProductWrapper>
          </IBox2>
        </Box>
      </Center>
    </Bg>
  );
}
