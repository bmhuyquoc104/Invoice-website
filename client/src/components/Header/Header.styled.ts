import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  background-color:${({theme}) => theme.header.backgroundColor};
`;

export default HeaderStyled;
