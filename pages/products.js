import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import {third} from "@/lib/colors"; 
import Products from "@/components/NewProducts"
import Head from "@/components/Head"

const Bg = styled.div`
background-color: ${third};
padding-top:70px;
`;

export default function ProductsPage({products}) {
  return (
    <>
    <Header/>
      <Bg>
      <Center>
      <Head>Products</Head>
      <ProductsGrid products={products} />
    </Center>
    </Bg>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}