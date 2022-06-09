import Main from "../components/Main/Main";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      style={{
        marginTop: "auto",
        marginBottom: "auto",
      }}
      exit={{
        x: -200,
        opacity: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
    >
      <Main />
    </motion.div>
  );
}

export default Home;
