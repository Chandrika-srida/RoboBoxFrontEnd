import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Input from "@/components/Input";



const ColumnsWrapper = styled.div`
  display: grid;
  left: 50%;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  left: 800px;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-bottom: 5px;
`;

const CartPageWrapper = styled.div`
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export default function CartPage() {
  const { cartProducts, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContact] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [workshopType, setWorkshopType] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  async function submitForm() {
    const userData = {
      name,
      email,
      contactno,
      city,
      postalCode,
      streetAddress,
      country,
      workshopType,
    };

    // Store the user data in your MongoDB database
    try {
      await axios.post("/api/storeUserData", userData);
      // Show a success message or trigger a popup
      alert("Thank you for showing interest. Our Team will contact you shortly.");
      // Clear the form fields
      setName("");
      setEmail("");
      setContact("");
      setCity("");
      setPostalCode("");
      setStreetAddress("");
      setCountry("");
      setWorkshopType("");
    } catch (error) {
      // Handle any errors that occur during the API request
      console.log(error);
    }
  }

  if (isSuccess) {
    
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for showing interest!</h1>
              <p>Our team will contact you shortly.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
    

  }

  return (
    <>
      <Header />
      <Center>
        <CartPageWrapper>
          <ColumnsWrapper>
            {!!cartProducts?.length && (
              <Box>
                <h2>Book Your Workshop Now!</h2>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(ev) => setName(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Contact No."
                  value={contactno}
                  name="contactno"
                  onChange={(ev) => setContact(ev.target.value)}
                />
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(ev) => setCity(ev.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(ev) => setPostalCode(ev.target.value)}
                  />
                </CityHolder>
                <Input
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={(ev) => setStreetAddress(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={(ev) => setCountry(ev.target.value)}
                />
                <Select
                  value={workshopType}
                  onChange={(ev) => setWorkshopType(ev.target.value)}
                >
                  <option value="">Workshop Type</option>
                  <option value="Demonstrative">Demonstrative</option>
                  <option value="Hands-On">Hands-On</option>
                </Select>
                <Button black block onClick={submitForm}>
                  Submit
                </Button>
              </Box>
            )}
          </ColumnsWrapper>
        </CartPageWrapper>
      </Center>
    </>
  );
}
