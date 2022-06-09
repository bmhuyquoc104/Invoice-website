import styled from "styled-components";
import { motion } from "framer-motion";

const AlertDeleteStyled = styled(motion.div)`
  display: flex;
  width: max(480px, 40%);
  flex-direction: column;
  gap: 2em;
  border-radius: 10px;
  padding: 4em;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  .confirm {
    color: ${({ theme }) => theme.text.color};
    font-size: 1.5rem;
    letter-spacing: 0.75px;
  }
  .confirm-message {
    color: ${({ theme }) => theme.subText.color};
    font-size: 0.75rem;
    line-height: 1.5;
    width: 40ch;
  }
  .controller {
    margin-left: auto;
    display: flex;
    gap: 0.5em;
  }
  .cancel {
    color: ${({ theme }) => theme.subText.color};
    padding: 1em 1.5em;
    border-radius: 10rem;
    border: none;
    :hover{
      cursor: pointer;
      background-color: ${({ theme }) => theme.hover.discard.backgroundColor}
    }
    font-weight: bold;
    background-color: ${({ theme }) => theme.button.edit.backgroundColor};
  }
  .delete {
    color: #ffffff;
    padding: 1em 1.5em;
    border-radius: 10rem;
    border: none;
    font-weight: bold;
    background-color: rgb(236, 87, 87);
  }

  @media (max-width: 620px) {
    width: 80%;
    padding: 2em 3em;
  }
  @media (max-width: 480px) {
    padding: 2em;
  }
`;

export default AlertDeleteStyled;
