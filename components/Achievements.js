import Head from "@/components/Head";
import Des from "@/components/Des";
import {BgStyle} from "@/components/Bg";
import ArchiSlider from "@/components/ArchiSlider";
import styled from "styled-components";
import { fourth } from "@/lib/colors";

const Bg=styled.div`
${BgStyle};
height: 100%;
marin-bottom:0px;
padding-bottom: 10px;
`;

const Circle=styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: ${fourth};
`;

const SlidePanel=styled.div`
margin: 50px;
`;

export default function Archi() {
    return (
        <Bg>
            <Head>Achievements</Head>
            <Des>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum doloribus asperiores tenetur est nihil voluptas ad</Des>
            <SlidePanel>
            <ArchiSlider/>
            </SlidePanel>
        </Bg>
    );
}

