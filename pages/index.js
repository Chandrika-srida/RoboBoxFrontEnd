import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import DemoWS from "@/components/DemoWS";
import Quiz from "@/components/Quiz";
import Home from "@/components/home";
import Login from "@/components/Login";
import Deals from "@/components/Deals";
import Testimonials from "@/components/Testimonials";
import Support from "@/components/Support";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import styled, { keyframes } from "styled-components";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          backgroundImage: `url("images/Main_bbg.png")`,
        }}
      >
        <Header />
        <Home />
      </div>
      <div id="login"><Login /></div>
      {/* <Featured product={featuredProduct} />       */}
      <NewProducts products={newProducts} />
      {/* <Testimonials /> */}
      <Testimonials />
      <div id="deal"><Deals/></div>
      <div
      style={{
        width: "100%",
        // height: '100vh',
        backgroundSize: "cover",
        backgroundImage: `url("images/Frame.png")`,
        boxSizing: "border-box",
      }}
      ><DemoWS /></div>
      
      <Quiz />
      <div id="support"><Support /></div>
      <Achievements />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "645ca76f61e568bb1f009ba4";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
