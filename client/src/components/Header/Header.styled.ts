import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  flex-direction: column;
  border-radius: 0 20px 20px 0;
  height: 100vh;
  position:fixed;

  .logo {
    padding: 1.8em;
    border-radius: 0 20px 20px 0;
    background-image: linear-gradient(var(--clr_logo), var(--clr_logo2));
  }
  .logo img {
    width: 100%;
    object-fit:contain;
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
    object-fit: contain;
    height: 40px;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    height:revert;
    width: 100%;
    border-radius: 0 0px 0px 0;

    .logo {
      padding: 0 1.75em;
      display: flex;
      align-items: center;
    }
    .logo img {
      width: 100%;
      height: 30px;
    }
    .theme-container {
      margin-top: revert;
      align-items: revert;
      justify-content: flex-end;
      /* padding: 1.2em 1.5em; */
      border-bottom: none;
      border-right: 1px solid ${({ theme }) => theme.border.color};
    }
    .avatar {
      display: flex;
      padding: 0 1.75em;
      align-items: center;
    }
    .avatar img{
      width: 100%;
    }
  }
`;

export default HeaderStyled;
