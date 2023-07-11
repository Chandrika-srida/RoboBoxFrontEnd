import Center from "./Center";
import styled from "styled-components";
import { primary, third, fourth } from "@/lib/colors";
import Head from "@/components/Head";
import Des from "@/components/Des";
import ButtonLink from "@/components/ButtonLink";
import Timer from "@/components/timer";
// import Bg from "@/components/Bg"

const BgBg = styled.div`
  height: 100vh;
  padding-top: 150px;
  background-color: ${fourth};
  width: 100%;
`;

const Bg = styled.div`
  padding: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:5vw;
  // border: 2px solid black;  
`;

const Box = styled.div``;

const IBox = styled.div`
// border: 2px solid black;
`;

const Image=styled.div`
display:inline-block;
background-color: ${fourth};
height: 60vh;
padding: 1rem;
display: grid;
grid-template-rows: 3fr 1fr;
justify-content: center;
img{
  margin: 15px auto;
}
`;


export default function Deals() {
  return (
    <BgBg>
      <Bg
        style={{
          margin: "0 auto",
          width: "70vw",
          height: "70vh",
          backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          backgroundImage: `url("images/Deal_bbg.png")`,
        }}
      >
        <Box>
          <Head left third>Deal of the day</Head>
          <Des left third>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            earum doloribus asperiores tenetur{" "}
          </Des>
          <IBox>
            <Timer/>
          </IBox>
          <br />
          <ButtonLink third href={"/products"}>shop now</ButtonLink>
        </Box>
        <Image>
          <img src="images/robotImage.png" width="200px" />
          <Des>Robotic arm with Arduino uno atmega328p</Des>
        </Image>
      </Bg>
    </BgBg>
  );
}
