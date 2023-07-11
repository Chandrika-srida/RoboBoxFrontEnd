import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { primary, secondary, third, fourth } from "@/lib/colors";
import Head from "@/components/Head";
import Des from "@/components/Des";
import Button from "@/components/Button";
import DatePicker from "./DatePicker";



const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 5px 20px;
  font-size: 18px;
  margin-top: 20px;
  border: 2px solid ${primary};
  border-radius: 10px;
  box-sizing: border-box;
`;
const StyledTextArea = styled.input`
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 30px;
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
  grid-template-columns: 1.5fr 1fr;
  width: 70%;
  gap: 8%;
  margin-left: 5%;
  padding-bottom: 30px;
`;
const IBox = styled.div``;
const Calender = styled.div`
  background-color: ${fourth};
  width: 100%;
  border-radius: 20px;
  padding: 15px;
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
      <StyledBox>
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
              <Button type="submit">Submit</Button>
            </IBox>
            <Calender>
              {/* <DateSelector /> */}

              <DatePicker/>
            </Calender>
          </Box>
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
