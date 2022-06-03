import styled from "styled-components";
import { motion } from "framer-motion";

const UserProfileStyled = styled(motion.section)`
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
  h2,
  .contact h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    position: relative;
    letter-spacing: -0.2px;
    font-size: 1rem;
    background: linear-gradient(315deg, #ffff45 0%, #ff5858 74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  a {
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .contact h2:hover {
    text-underline-offset: 4px;
  }
  .contact h2::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: -5px;
    left: 0;
    background-color: #ff5858;
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.5s ease;
  }
  .contact h2:hover::before {
    transform: scaleX(1);
  }
  .name {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 1em;
  }
  span {
    display: flex;
    align-items: center;
  }
`;

export { UserProfileStyled };
