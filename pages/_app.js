import {createGlobalStyle} from "styled-components";
import {CartContextProvider} from "@/components/CartContext";
import {primary,secondary} from "@/lib/colors"; 

const GlobalStyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap');
  *{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    font-family: 'Frank Ruhl Libre', serif;
}
body{
  color: ${primary};
}


`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
