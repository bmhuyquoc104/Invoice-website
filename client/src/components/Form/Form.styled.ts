import styled from "styled-components";
import { motion } from "framer-motion";
const FormStyled = styled(motion.form)`
  background-color: ${({ theme }) => theme.body.backgroundColor};
  width:50%;
  overflow-y:scroll;
`;

export default FormStyled;
