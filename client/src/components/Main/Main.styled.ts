import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  padding: 4em 0;
  gap: 4em;
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .header-title h1 {
    color: ${({ theme }) => theme.text.color};
    font-size: 2rem;
    letter-spacing: 0.2px;
  }
  .header-title h2 {
    color: ${({ theme }) => theme.subText.color};
    font-size: 0.75rem;
    letter-spacing: 1px;
    font-weight: 300;
  }
  .header-control {
    display: flex;
    flex-direction: row;
    gap: 3em;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 1em;
    color: ${({ theme }) => theme.text.color};
    font-size: 0.75rem;
    background-color: transparent;
    font-weight: bold;
    border: none;
    letter-spacing: 0.5px;
  }
  .add {
    display: flex;
    padding: 0.75em 1em;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
    font-size: 0.75rem;
    border: none;
    gap: 0.5em;
    color: ${({ theme }) => theme.button.color};
    border-radius: 25px;
    background-color: ${({ theme }) => theme.button.backgroundColor};
    :hover {
      background-color: var(--clr_logo2);
      cursor: pointer;
    }
  }
  .add img {
    padding: 0.75em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.button.color};
  }
  .main-body {
    display: flex;
    gap: 1em;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 8em 4em;
    .header-control {
      gap: 1em;
    }
  }
  @media (max-width: 626px) {
    padding: 7em 1.5em;
  }
  @media (max-width: 480px) {
    .header-title h1 {
      letter-spacing: 0.2px;
      font-size: 1.6rem;
    }
    .header-title h2 {
      width: 18ch;
    }
    .filter p {
      gap: 0.1em;
      width: 6ch;
      height: 15px;
      overflow: hidden;
    }
    .add p {
      width: 6ch;
      height: 15px;
      overflow: hidden;
    }
  }
`;

export default MainStyled;
