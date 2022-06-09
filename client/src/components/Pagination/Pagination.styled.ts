import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  gap: 0.4em;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  button {
    text-align: center;
    padding: 1em 1.25em;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    color: ${({ theme }) => theme.text.color};
    font-size: 0.75rem;
    :hover {
      cursor: pointer;
    }
  }
  .page.active {
    background-color: red;
    background-color: ${({ theme }) => theme.text.color};
    color: ${({ theme }) => theme.card.backgroundColor};
  }
  button:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export default PaginationStyled;
