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
  .filter{
    cursor: pointer;
  }
  .filter,
  .filter-top {
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
  .drop-down {
    /* display: flex;
    flex-direction: column; */
    position: relative;
  }
  .filter img {
    transform: rotate(0deg);
  }
  .filter-top img {
    transform: rotate(180deg);
  }

  .filter-options {
    position: absolute;
    bottom: 0;
    top: 7vh;
    left: -4.5vh;
    background-color: ${({ theme }) => theme.dropdown.backgroundColor};
    border-radius: 8px;
    bottom: 0;
    min-height:125px;
    box-shadow: 0px 10px 20px ${({ theme }) => theme.boxShadow.color};
    width: 12rem;
    display: flex;
    padding: 1.5rem;
    gap: 1.2em;
    text-align: left;
    flex-direction: column;
  }
  .filter-options p {
    display: flex;
    align-items: center;
    gap: 1.25em;
  }
  .filter-options span {
    background-color: ${({ theme }) => theme.dropdown.span.backgroundColor};
    border-radius: 2px;
    padding: 0.3em;
    border: 1px solid transparent;
    :hover {
      cursor: pointer;
      border: 1px solid var(--clr_logo);
    }
    display: flex;
    align-items: center;
  }
  .filter-options img {
    opacity: 0;
  }
  .paid-selected span img,
  .pending-selected span img,
  .draft-selected span img {
    opacity: 1;
  }
  .paid-selected span,
  .pending-selected span,
  .draft-selected span {
    background-color: var(--clr_logo);
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
    :hover{
      cursor: pointer;
    }
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
    .filter-top > p,
    .filter > p {
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
