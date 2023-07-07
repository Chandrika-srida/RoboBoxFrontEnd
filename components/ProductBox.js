import styled from "styled-components";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import {ButtonStyle} from "@/components/Button";
import { DesStyle } from "@/components/Des";
import {fourth} from "@/lib/colors";

const Des = styled.div`
  ${DesStyle}
  font-size:18px;
`;

const Button = styled.div`
  ${ButtonStyle}
  text-transform:capitalize;
`;

const ProductWrapper = styled.div`
background-color:${fourth};
border-radius: 15px;
text-align:center;
padding: 20px;
`;

const WhiteBox = styled(Link)`
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

const PriceRow = styled.div`
  @media screen and (min-width: 768px) {
    display:grid;
    align-items:center;
    align-content: center;
  grid-template-rows: 1fr 2fr;
  // border:solid black 2px;
  }

`;

const Price = styled.div`
font-size: 20px;
  font-weight:400;
  // border:solid black 2px;

  @media screen and (min-width: 768px) {
    font-weight:600;
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
          <img src={images?.[0]} alt=""/>
      </WhiteBox>
      <ProductInfoBox>
        <Des href={url}>{title}</Des>
        <PriceRow>
          <Price>
            ${price}
          </Price>
          <Button secondary onClick={() => addProduct(_id)}>Add to cart</Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}