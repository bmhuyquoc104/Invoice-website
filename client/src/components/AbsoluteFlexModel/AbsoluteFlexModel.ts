import styled from "styled-components";

const AbsoluteFlexContainer = styled.div`
  position: fixed;
  z-index: 10;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export { AbsoluteFlexContainer };
