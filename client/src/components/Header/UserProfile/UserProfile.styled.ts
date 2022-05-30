import styled from "styled-components";

const UserProfileStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;

  img {
    aspect-ratio: 1/1;
    height: 100px;
    object-fit: contain;
  }
  .user-info,
  .contact {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    letter-spacing:-0.2px;
    font-size: 1rem;
    background: linear-gradient(315deg, #ffff45 0%, #ff5858 74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .name {
    font-size: 1.75rem;
    font-weight:700;
    letter-spacing: 2px;
    margin-bottom:1em;
  }
  span {
    display: flex;
    align-items: center;
  }
`;

export { UserProfileStyled };
