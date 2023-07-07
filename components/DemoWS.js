import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { primary, secondary, third } from "@/lib/colors";
import Head from "@/components/Head";
import Des from "@/components/Des";
import Button from "@/components/Button"

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 5px 20px;
  font-size: 18px;
  margin-top: 20px;
  border: 2px solid ${primary};
  border-radius: 10px;
  box-sizing: border-box;
`;
const StyledTextArea = styled.input`
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  font-size: 18px;
  margin: 20px 0px;
  border: 2px solid ${primary};
  border-radius: 10px;
  box-sizing: border-box;
`;

const StyledBox = styled.div`
  justify-content: center;
  padding: 30px 40px;
  margin-bottom: 30px;
`;

const StyledDropBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(217, 217, 217);
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 70%;
  gap: 8%;
`;
const IBox = styled.div``;
const Calender = styled.div`
  background-color: ${third};

  width: 100%;
  margin: 15% 0;
  border-radius: 20px;
`;

export default function FormData() {
  const [studentname, setStudentName] = useState("");
  const [parentname, setParentName] = useState("");
  const [emailid, setEmail] = useState("");
  const [mobileno, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [raddress, setAddress] = useState("");
  const [showDropBox, setShowDropBox] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      studentname,
      parentname,
      emailid,
      mobileno,
      age,
      raddress,
    };

    try {
      await axios.post("/api/storeformData", formData);
      setShowDropBox(true);
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setStudentName("");
    setParentName("");
    setEmail("");
    setMobile("");
    setAge("");
    setAddress("");
    setShowDropBox(false);
    window.location.reload(); // Refresh the page
  };

  const renderForm = () => {
    return (
      <StyledBox
        style={{
          width: "100%",
          // height: '100vh',
          backgroundSize: "cover",
          backgroundImage: `url("images/DemoWS_wbg.png")`,
          boxSizing: "border-box",
        }}
      >
        <Head left>Book demo workshop now</Head>
        <form onSubmit={handleSubmit}>
          <Box>
            <IBox>
              <StyledInput
                type="text"
                placeholder="Student Name"
                value={studentname}
                onChange={(ev) => setStudentName(ev.target.value)}
              />
              <br />
              <StyledInput
                type="text"
                placeholder="Parent Name"
                value={parentname}
                onChange={(ev) => setParentName(ev.target.value)}
              />
              <br />
              <StyledInput
                type="text"
                placeholder="Age of Student"
                value={age}
                onChange={(ev) => setAge(ev.target.value)}
              />
              <br />
              <StyledInput
                type="text"
                placeholder="Email-ID"
                value={emailid}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <br />
              <StyledInput
                type="text"
                placeholder="Mobile No."
                value={mobileno}
                onChange={(ev) => setMobile(ev.target.value)}
              />
              <br />
              <StyledTextArea
                placeholder="Residential Address"
                value={raddress}
                onChange={(ev) => setAddress(ev.target.value)}
              />
              <br />
            </IBox>
            <Calender></Calender>
          </Box>
          <Button type="submit">Submit</Button>
        </form>
      </StyledBox>
    );
  };

  const renderDropBox = () => {
    return (
      <StyledDropBox>
        <Des margin="30px" size="25px">
          Thank you for showing interest! Our Team will Contact You Shortly
        </Des>
        <Button onClick={resetForm}>Close</Button>
      </StyledDropBox>
    );
  };

  return showDropBox ? renderDropBox() : renderForm();
}
