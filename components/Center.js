import styled from "styled-components";


let StyledDiv = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 20px;
  // padding-top: 50px;
  // height: 90vh;
  box-sizing: border-box;
  text-align: center;
  // border: solid black 2px;
`;


export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}