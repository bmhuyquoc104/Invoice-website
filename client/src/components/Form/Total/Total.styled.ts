import styled from "styled-components";

const TotalStyled = styled.div`
  background-color: ${({ theme }) => theme.total.backgroundColor};
  padding: 2em 2em;
  align-items: center;
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
`;

export default TotalStyled;
