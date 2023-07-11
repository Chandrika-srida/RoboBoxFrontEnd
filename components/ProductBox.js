import styled from "styled-components";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { ButtonStyle } from "@/components/Button";
import { DesStyle } from "@/components/Des";
import { fourth } from "@/lib/colors";

const Des = styled.div`
  ${DesStyle}
  font-size:1.2rem;
`;

const Button = styled.div`
  ${ButtonStyle}
  text-transform:capitalize;
  font-size: 1rem;
  margin: 0px 2vw;
  height:2rem;
`;

const ProductWrapper = styled.div`
  background-color: ${fourth};
  display: grid;
  grid-template-rows: 2fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1vh;
`;

const WhiteBox = styled(Link)`
  width: 15vw;
  height:25vh;
  box-sizing: border-box;
  img {
    max-width: 15vw;
    max-height: 25vh;
  }
`;

const ProductInfoBox = styled.div`
  width: 100%;
  display:grid;
  grid-template-rows: 0.6fr 0.5fr 1fr;
`;

const Price = styled.div`
  @media screen and (min-width: 768px) {
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt="" />
      </WhiteBox>
      <ProductInfoBox>
        <Des href={url}>{title}</Des>
        <Price>${price}</Price>
        <Button secondary onClick={() => addProduct(_id)}>
          Add to cart
        </Button>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
