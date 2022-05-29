import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  flex-direction: column;
  border-radius: 0 20px 20px 0;

  .logo {
    padding: 1.8em;
    border-radius: 0 20px 20px 0;
    background-image: linear-gradient(var(--clr_logo), var(--clr_logo2));
  }
  .logo img {
    width: 100%;
    height: 40px;
  }
  .theme-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    margin-top: auto;
    border-bottom: 1px solid ${({ theme }) => theme.border.color};
  }
  .avatar {
    display: flex;
    padding: 1.5em 0;
    align-items: center;
  }
  .avatar img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    height: 35px;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    border-radius: 0 0px 0px 0;

    .logo {
      padding: 1.2em 1.5em;
    }
    .logo img {
      width: 100%;
      height: 30px;
    }
    .theme-container {
      margin-top: revert;
      padding: 1.2em 1.5em;
    }
  }
`;

export default HeaderStyled;
