import Center from "./Center";
import styled from "styled-components";
import {primary,third,fourth} from "@/lib/colors";
import Head from "@/components/Head";
import Des from "@/components/Des";
import ButtonLink from "@/components/ButtonLink";

const BgBg = styled.div`
height:100vh;
padding-top: 150px;
background-color: ${third};
`;

const Bg = styled.div`
padding: 50px;
display: grid;
grid-template-columns: 1fr 1fr;

`;

const Box = styled.div``;

const IBox = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;
text-align:center;
`;

const Time = styled.span`
// padding: 30px;
margin: 20px;
    background-color: ${primary};
    color: ${fourth};
    font-weight: 600;
    big{
        font-size: 45px;
        display: inline-block;
        width: 100px;
        height:50px;
    }
    small{
        font-size: 20px;
        font-weight: 200;
        display: inline-block;
        width: 100px;
        height:50px;
        padding:10px
    }
`;

export default function Deals() {
    return (
      <BgBg>
        <Bg style={{
      margin: '0 auto',
      width: '70%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("images/Deal_bbg.png")`,
    }}
        >
          <Box>
          <Head left>Deal of the day</Head>
          <Des>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum doloribus asperiores tenetur </Des>
          <IBox>
            <Time>
              <big>08</big>
              <small>Days</small>
            </Time>
            <Time>
              <big>09</big>
              <small>Hours</small>
            </Time>
            <Time>
              <big>14</big>
              <small>Min</small>
            </Time>
          </IBox>
          <br/>
          <ButtonLink href='/'>shop now</ButtonLink>
          </Box>
        </Bg>
      </BgBg>
    );
}