import styled from "styled-components";

const AbsoluteFlexContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const AbsoluteFormContainer = styled.div`
  position: fixed;
  z-index: 5;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  top:0px;
  left:4rem;
  width: 100%;
  height: 100vh;
  @media (max-width:900px){
    top:5rem;
    left:0px;
  }
`;

const AbsoluteFlexContainer2= styled.div`
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: 0px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export { AbsoluteFlexContainer, AbsoluteFormContainer,AbsoluteFlexContainer2 };
