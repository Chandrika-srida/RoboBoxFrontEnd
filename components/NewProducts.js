import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import {third} from "@/lib/colors"; 
import Head from "@/components/Head";
import {BgStyle} from "@/components/Bg";

const Bg = styled.div`
${BgStyle};
height: 100%;
`;


export default function NewProducts({products}) {
  return (
    <Bg>
      <Center>
      <Head>Products</Head>
      <ProductsGrid products={products} />
    </Center>
    </Bg>
  );
}