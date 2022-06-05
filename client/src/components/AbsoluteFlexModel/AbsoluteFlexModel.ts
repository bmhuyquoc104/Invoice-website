import styled from "styled-components";

const AbsoluteFlexContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
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
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  top:0;
  bottom:0;
  left:5.3rem;
  width: 100%;
  height: 100vh;
  @media (max-width:900px){
    top:5.3rem;
    left:0;
  }
`;

export { AbsoluteFlexContainer, AbsoluteFormContainer };
